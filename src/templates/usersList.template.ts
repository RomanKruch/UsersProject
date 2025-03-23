import { User } from "../user.schema";

export const UsersListTemplate = (users: User[]) => {

    return `
    <!DOCTYPE html>
    <html lang="uk">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Картка користувача</title>
    <style>
         body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 50px;
            height: 100vh;
            display: flex;
            flex-wrap: wrap;
            gap: 30px;
            justify-content: center;
            background: linear-gradient(-45deg, #1c1e22, #2b2e35, #3a3d45, #24272c);
            background-size: 400% 400%;
            color: white;
        }        

        .card {
            width: 340px;
            height: fit-content;
            background: rgba(255, 255, 255, 0.08);
            border: 1px solid rgba(255, 255, 255, 0.4);
            border-radius: 12px;
            box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.3);
            padding: 20px;
            text-align: center;
        }

      .card h2 {
            color: #e0e0e0;
            margin-bottom: 10px;
            font-weight: bold;
        }

        .card p {
            font-size: 16px;
            margin: 8px 0;
            color: #b0b0b0;
        }

        .highlight {
            font-weight: bold;
            color: #dcdcdc;
            text-shadow: 0 0 3px rgba(255, 255, 255, 0.3);
        }

        .offers {
            background: rgba(255, 255, 255, 0.12);
            color: white;
            padding: 10px;
            border-radius: 8px;
            margin-top: 15px;
            font-weight: bold;
            border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .card img {
            display: block;
            margin: 0 auto;
        }

    
    </style>
    </head>
    <body>
        ${users.map(user => {
            const {name, surname, gender, offers, phoneService, _id} = user;
            const imgHref = gender === 'Чоловік' ? 'https://cdn-icons-png.flaticon.com/512/3233/3233508.png' : 'https://cdn-icons-png.flaticon.com/512/3577/3577099.png';

            return `<div class="card">
            <h2>Картка користувача</h2>
            <img src="${imgHref}" alt="Sex icon" height="200px">
            <p>Ім'я:  <span class="highlight">${name}</span></p>
            <p>Прізвище:  <span class="highlight">${surname}</span></p>
            <p>Стать:  <span class="highlight">${gender}</span></p>
            <p>Оператор зв'язку:  <span class="highlight">${phoneService}</span></p>
            <p>Пропозиції:  <span class="highlight">${offers}</span></p>
            <p>ID користувача:  <span class="highlight">${_id}</span></p>
        </div>`
        }).join("")}
        
    </body>
    </html>`
}