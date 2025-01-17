# Web simulation of UbuntuOS

![](https://media.licdn.com/dms/image/C562DAQFjprpK3CS5CQ/profile-treasury-image-shrink_800_800/0/1675446558156?e=1678903200&v=beta&t=XXJ0wh6tvL1tKTer7gniBmRevAQaKU5g9YRBb4ArZLE)

<a href="https://ubuntuos.pages.dev/" target="_blank" style="background: #fff !important; height: 40px !important;width: 140px !important;">Live Site Preview</a>

This is a recreated website of theme Ubuntu 20.04, made using Next.js (also Vite) & Tailwind CSS.
If you want to edit this, Clone this project and edit the files in `/src/components`.

To run this on localhost
type `npm start` and when u are done coding type `npm run build` to build your app.

**NOTE**:
- Remember to create `.env` file at root directory and add `
VITE_TRACKING_ID = 'YOUR GOOGLE ANALYTICS TRACKING ID'`.
- If you have yarn just replace `npm run dev` and `npm run build` with `yarn dev` and `yarn build`.

<a href="https://www.buymeacoffee.com/lalshubham" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 40px !important;width: 140px !important;" ></a>

### To make the contact form work

- Create a account in [emailjs](https://www.emailjs.com/) create also new Outlook or Gmail account to be able
  to send email.
- Create a new service, select and log in to your newly created outlook or gmail account on EmailJS.
- Also create a new template, containing the body `Name`: `{{name}}`, `Subject`: `{{subject}}`, `Message`: `{{message}}`.
- Go back to the dashboard and get the Service ID copy it.
- Create a .env file in your root folder and put

```

VITE_SERVICE_ID = 'YOUR EMAILJS SERVICE ID'
VITE_TEMPLATE_ID = 'YOUR EMAILJS TEMPLATE ID'
VITE_USER_ID = 'YOUR EMAILJS USER ID'

```

into it. Replace \*your user id and your service ID with your values in your EmailJS service.
### `EmailJS Template Structure`
![EmailJS](https://user-images.githubusercontent.com/111045472/213639218-5226d9de-8b11-4a66-a4b6-d1b03a8ffac2.png)

## This project was made using Create Next App (and later with Vite)! Here is the scripts that u can run.

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributiors who wants to make this website better can make contribution,which will be **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Added some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Snapshot of the application
![Project14](https://user-images.githubusercontent.com/111045472/225552272-00b25576-9d3b-4fd0-8d11-a8208c159c3c.png)
