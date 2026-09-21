import { useState } from "react";

function SignupForm() {
    const[form, setForm] = useState({
    name: '',
    email: '',
    course: '',
    level: '',
    agree: false,
    message:''
});
const [showConfirm, setShowConfirm] = useState(false);
const handleChange = (e) => {
    // setForm({...form, [e.target.name]: e.target.value});
    // A checkbox stores just true or false not value so we have to change the  handle for it to handle both change
    const {name, value, type, checked } = e.target;
    setForm({...form, [name]: type === "checkbox" ? checked : value });
};
const handleSubmit = (e) => {
  e.preventDefault();
  setShowConfirm(true);
};
const handleYes =() => {
    setShowConfirm(false);
    setForm({ name: '', email: '', course: '', level: '', agree: false, message: ''});
};



return (
    <>
    <form onSubmit={handleSubmit}>
        <h2>SignupForm</h2>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" value={form.name} onChange={handleChange} />
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" value={form.email} onChange={handleChange}/>
        <label htmlFor="course">Course</label>

        <select id="course" name="course" value={form.course} onChange={handleChange} >
        <option value="">Choose a course</option>
        <option value="web dev">Web dev</option>
        <option value="cybersecurity">Cybersecurity</option>
        <option value="data analysis">Data analysis</option>
        </select>

       <p>Level</p>
        <label>
            <input type="radio"
            name="level"
            value="beginner"
            checked={form.level === "beginner"}
            onChange={handleChange} />
            Beginner
        </label>
        <label>
            <input type="radio"
            name="level"
            value="intermediate"
            checked={form.level === "intermediate"}
            onChange={handleChange} />
            Intermediate
        </label>
        <label>
            <input type="radio"
            name="level"
            value="advanced"
            checked={form.level === "advanced"}
            onChange={handleChange} />
            Advanced
        </label>
        <label>
            <input type="checkbox" name="agree" checked={form.agree} onChange={handleChange} />
             I agree to the terms
        </label>
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" value={form.message} onChange={handleChange}></textarea>

        <button type="submit">Submit</button>
    </form>
  {showConfirm && (
  <div>
    <p>Do you want to submit?</p>
    <button onClick={handleYes}>Yes</button>
    <button onClick={() => setShowConfirm(false)}>No</button>
  </div>
)}
    </>
);
}
export default SignupForm;
