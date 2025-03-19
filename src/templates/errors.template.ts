export const ErrorsTemplate = (errors: string[]) => {
    return `
    <!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Повідомлення про помилку</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f8f8f8;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 20px;
            height: 100vh;
            margin: 0;
        }

        .error-message {
            background: #ff4d4d;
            color: white;
            padding: 15px 20px;
            border-radius: 8px;
            font-size: 16px;
            font-weight: bold;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
            display: flex;
            align-items: center;
            gap: 10px;
            animation: fadeIn 0.5s ease-in-out;
        }

        .error-icon {
            font-size: 20px;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
        }
    </style>
    </head>
    <body>
        ${errors.map(err => (`<div class="error-message">
            <span class="error-icon">⚠️</span>
            ${err}
            </div>`)).join("")
        }
        
    </body>
    </html>`
}