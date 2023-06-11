# Tutorial 3

* *Date Created*: 10/06/2023
* *Last Modification Date*: 10/06/2023
* *Hosted URL*: [https://main--golden-zabaione-853d6e.netlify.app/]
* *Git URL*: https://git.cs.dal.ca/rmistry/tutorial/-/tree/main/tutorial3

## Author

Name: Riya Mistry

Banner Id: B00931939

Email: Riya.mistry@dal.ca

## Deployment

Deployment platform name: [Netlify]

Link to hosted project : [https://main--golden-zabaione-853d6e.netlify.app/]


## Built With

* [npm](https://www.npmjs.com/) - Package manager for node.js
* [React.js](https://react.dev/) - The web framework used
* [create-react-app](https://create-react-app.dev/) - Tool for creating React applications
* [nodejs](https://nodejs.org/en) - Runtime used
* [react-bootstrap](https://react-bootstrap.github.io/) - UI library for React applications
* [react-router](https://reactrouter.com/) - Routing library for React



## Sources Used
### Registration.js

*Lines 114-124*

```
    <Form.Group controlId="validationCustom01" className='mb-10'>
        <Form.Control
            required
            type="text"
            placeholder="First name"
            value={firstName}
            onChange={(e) => handleFirstNameChange(e.target.value)}
            isInvalid={!isFirstNameValid}
        />
        <Form.Control.Feedback type="invalid">Invalid value.</Form.Control.Feedback>
    </Form.Group>
```
Above code was written by getting inspiration from the official document of React-Bootstrap [validation](https://react-bootstrap.netlify.app/docs/forms/validation) and used as per my need.

### References

[1] “Regular expressions - JavaScript | MDN,” May 05, 2023. Available: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions. [Accessed: Jun. 10, 2023]



