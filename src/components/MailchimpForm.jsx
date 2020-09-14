import React from "react"
import addToMailchimp from 'gatsby-plugin-mailchimp'
export default class MyGatsbyComponent extends React.Component {
    // Since `addToMailchimp` returns a promise, you
    // can handle the response in two different ways:
    // Note that you need to send an email & optionally, listFields
    // these values can be pulled from React state, form fields,
    // or wherever.  (Personally, I recommend storing in state).
    _handleSubmit = async (e) => {
        e.preventDefault();
        const result = await addToMailchimp(email='xx', listFields='xx')
        // I recommend setting `result` to React state
        // but you can do whatever you want
    }
    render() {
        return (
            <form onSubmit={this._handleSubmit(email, { listFields })}>
                ...
            </form>
        )
    }
}
