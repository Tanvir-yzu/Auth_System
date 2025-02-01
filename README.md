# Authentication System Webpage

## Introduction
This project presents a basic authentication system webpage that includes registration and login forms. It is designed to provide a starting point for building more complex user authentication mechanisms. The project leverages HTML, CSS, and Bootstrap for a responsive and user - friendly interface.

## Technologies Used
### 1. HTML (Hypertext Markup Language)
- Forms the structural backbone of the webpage. It defines the layout of the authentication forms, including fields for user input such as name, email, and password. The forms are semantically marked up, making it easy to understand and maintain the code.

### 2. CSS (Cascading Style Sheets)
- Custom CSS is used in combination with Bootstrap to style the elements on the page. It controls the visibility of the registration and login forms, with the registration form being visible by default. CSS classes like `auth - form` and `active - form` are used to manage the display property of the forms.

### 3. Bootstrap 5
- Bootstrap is a popular front - end framework that simplifies the process of creating responsive and mobile - friendly web pages. It provides pre - built CSS classes for layout, typography, buttons, and cards. In this project, Bootstrap is used to give the authentication forms a clean and professional look. For example, the `card` class creates a container for the forms, and the `btn` classes style the buttons.

## How It Works
1. **Initial Page Load**:
   - When the page loads, the registration form is visible. This is because the `registerForm` has the `active - form` class which sets its CSS `display` property to `block`, while the `loginForm` has the `auth - form` class with a `display` property of `none`.
2. **Button Functionality**:
   - There are two buttons in the `card - header`: "Register" and "Login". The "Register" button has the `id` of `showRegister`, and the "Login" button has the `id` of `showLogin`. Clicking on these buttons should trigger a change in the visibility of the forms. However, the actual functionality to switch between the forms is implemented in the `script.js` file (not provided in the given HTML code).
3. **Form Submission**:
   - Currently, the form submission buttons in both the registration and login forms do not have any functionality attached to them. In a real - world scenario, these buttons would be used to send user - entered data to a server - side script for authentication and registration processes.

## Installation
1. **Download the Files**:
   - If the project is available on a repository, you can clone it using the appropriate Git commands. Otherwise, you can directly download the HTML file.
2. **Include Dependencies**:
   - The provided HTML file already links to the Bootstrap CSS and JavaScript files hosted on the CDN (Content Delivery Network). If you prefer to use local files:
     - Download Bootstrap 5 from the official website.
     - Extract the downloaded files and place the relevant CSS and JavaScript files in your project directory.
     - Update the `href` and `src` attributes in the HTML file to point to the local files. For example, if you place the Bootstrap CSS file in a `css` directory, you would change the link tag from:
       ```html
       <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
       ```
       to
       ```html
       <link href="css/bootstrap.min.css" rel="stylesheet">
       ```
   - Create a `script.js` file in the same directory as the HTML file. This file will be used to add interactivity, such as toggling between the registration and login forms.

## Usage
1. **Accessing the Page**:
   - Open the HTML file in a web browser. The registration form will be presented to the user.
2. **Switching Forms**:
   - Click on the "Login" button to switch to the login form.
   - Click on the "Register" button to switch back to the registration form.
3. **Form Interaction**:
   - Fill in the required fields in either the registration or login form. In the registration form, fields for "Full Name", "Email", and "Password" are present. In the login form, fields for "Email" and "Password" are available. The `required` attribute ensures that these fields cannot be left blank.
   - However, since no server - side code is implemented, clicking the "Register" or "Login" buttons will not perform any actual authentication or registration at this stage.

## Customization
### 1. Styling
- **Bootstrap Customization**: You can override Bootstrap's default CSS classes by creating your own CSS rules. For example, if you want to change the color of the buttons, you can target the `btn` classes. If you want to change the background color of the card that contains the forms, you can target the `card` class.
- **Custom CSS**: Add more custom CSS rules to further enhance the appearance of the forms. You can change the font, add animations, or modify the layout of the form fields according to your requirements.

### 2. Functionality
- **Client - Side Scripting**: In the `script.js` file, you can add functionality to perform client - side validation beyond the basic HTML5 `required` validation. For example, you can check the strength of the password, validate the email format more comprehensively, or add a password visibility toggle.
- **Server - Side Integration**: To make the authentication system functional, you need to integrate it with a server - side technology such as Node.js with Express, Python with Django, or PHP. This will involve sending form data to the server, validating user credentials, and handling user registration and login processes.

## Limitations
### 1. Lack of Authentication Logic
- The current implementation only provides the front - end forms. There is no built - in authentication mechanism. User data is not being verified against a database, and no user accounts are being created or logged in.

### 2. Limited Validation
- The form validation is mainly based on the HTML5 `required` attribute. There is no in - depth client - side validation for things like password complexity, and no server - side validation at all. This means that the data entered by users may not be properly validated, leading to potential security risks.

### 3. Security Concerns
- There are no security features implemented such as password hashing. Storing passwords in plain text (if data were to be submitted) is a major security vulnerability. Additionally, there is no protection against CSRF (Cross - Site Request Forgery) attacks, which can be exploited by malicious users to perform unauthorized actions on behalf of legitimate users.