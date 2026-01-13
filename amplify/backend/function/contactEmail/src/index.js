const { SESClient, SendEmailCommand } = require("@aws-sdk/client-ses");

const ses = new SESClient({ region: "eu-north-1" });

exports.handler = async (event) => {
  try {
    // Handle GET safely
    if (event.httpMethod === "GET") {
      return {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({ message: "Contact API is running" }),
      };
    }

    // Handle POST
    const body = JSON.parse(event.body || "{}");
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return {
        statusCode: 400,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({ error: "Missing fields" }),
      };
    }

    const params = {
      Destination: {
        ToAddresses: ["sanjayhn173@gmail.com"],
      },
      Message: {
        Body: {
          Text: {
            Data: `
New contact form submission:

Name: ${name}
Email: ${email}

Message:
${message}
            `,
          },
        },
        Subject: {
          Data: "Portfolio Contact Form",
        },
      },
      Source: [email],
    };

    await ses.send(new SendEmailCommand(params));

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ success: true }),
    };
  } catch (err) {
    console.error("LAMBDA ERROR:", err);
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ error: "Internal server error" }),
    };
  }
};
