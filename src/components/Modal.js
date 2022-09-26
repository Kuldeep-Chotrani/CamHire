// import React, {useState} from "react";
// import "./modal.css";
// import emailjs from "emailjs-com";
// function Modal(props) {
//   const initialState = {
//     name: "",
//     email: "",
//     message: "",
//   };
//   const [{ name, email, message }, setState] = useState(initialState);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setState((prevState) => ({ ...prevState, [name]: value }));
//   };

//   const clearState = () => setState({ ...initialState });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     props.setData({ name, email, message });
//     emailjs
//       .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID")
//       .then(
//         (result) => {
//           console.log(result.text);
//           clearState();
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//   };
//   return (
//     <div id="popup">
//       <form id="form" onSubmit={handleSubmit}>
//         <button type="button" id="close" onClick={props.handleclick}>
//           X
//         </button>
//         <div id="photographer">Photographer</div>
//         <div>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             className="form-control"
//             placeholder="Name"
//             required
//             onChange={handleChange}
//           />
//         </div>
//         <div id="div">
//           <input
//             type="email"
//             id="email"
//             name="email"
//             className="form-control"
//             placeholder="Email"
//             required
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <textarea
//             name="message"
//             id="message"
//             className="form-control"
//             rows="4"
//             placeholder="Message"
//             required
//             onChange={handleChange}
//           ></textarea>
//         </div>
//         <button type="submit" id="submit" >
//           Submit
//         </button>
//       </form>
//       <br />
//     </div>
//   );
// }

// export default Modal;
