
# Expencify 
 
 Application to track your daily expences.




##  Tech Stacks

### React Js :

    React helps you create your web applications in a more maintainable way.
    React enables developer to reuse components. 
    I have used useEffect react hook in this application.By using this Hook, we tell React that our component needs to do something after render. React will remember the function we passed , and call it later after performing the DOM updates. 

### Redux :

    In this web application redux library is used to store the states of a component.
    There are various components of redux are used in this web application like store , reducers, combine reducers, actions.
### React Dates :
#### Install React dates using :
```http
npm install react-dates

```
#### Import datepicker CSS using :
```http
import 'react-dates/lib/css/_datepicker.css'

```
- #### From react-dates I have used SingleDatePicker and DateRangePicker
#### SingleDatePicker Minimum required setup : 

```http
<SingleDatePicker
  date={this.state.date} // momentPropTypes.momentObj or null
  onDateChange={date => this.setState({ date })} // PropTypes.func.isRequired
  focused={this.state.focused} // PropTypes.bool
  onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
  id="your_unique_id" // PropTypes.string.isRequired,
/>

```
#### DateRangePicker Minimum required setup :
```http
<DateRangePicker
  startDate={this.state.startDate} // momentPropTypes.momentObj or null,
  startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
  endDate={this.state.endDate} // momentPropTypes.momentObj or null,
  endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
  onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
  focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
  onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
/>

```

### React-Router :
    I have used React-Router for Routing in this web application which  enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL. 
#### Components used from react-router-dom :
    1. BrowserRouter :- BrowserRouter is a router implementation that uses the HTML5 history API to keep your UI in sync with the URL. 
                        It is the parent component that is used to store all of the other components.

    2. Route :-         Route is the conditionally shown component that renders some UI when its path matches the current URL.  

    3. Switch :-         Switch component is used to render only the first route that matches the location rather than rendering all matching routes.

    4. Link :-           Link component is used to create links to different routes and implement navigation around the application. It works like HTML anchor tag.

    5. NavLink :-        A special version of the <Link> that will add styling attributes to the rendered element when it matches the current URL.

#### Components used from react-redux :
    1. mapStateToProps :- The mapStateToProps function is used in the Redux pattern to reflect any updates to the Redux store and merge them into props in your component.
                          The Redux store serves as a centralized place for the state to live in your application.
    
    2. connect :-         The mapStateToProps function is wrapped in a connect function provided by the React-Redux library. 
                          The connect function will allow four optional parameters with mapStateToProps being the first and if no other is provided then a dispatch function will be automagically created to access in props. 
                          It also is a wrapper for the entire component and is immediately invoked as connect is called.

   
## Author

- [@rushikesh-mahamuni](https://github.com/rushikesh-mahamuni)

