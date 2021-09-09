import React, {useState} from 'react'

export default function Comments(props) {
  const [values,setValues] = useState({
    name:"",
    email:"",
    content:"",
  });
 
  const handleNameInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      name: event.target.value,
    }));
  };
  
  const handleEmailInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      email: event.target.value,
    }));
  };
  
  const handleContentInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      content: event.target.value,
    }));
  };

  const sendValues =() => {
    props.valuesNew(values)
  }
  
  
    return (
        <div>
            <div id="comment" class="row">
        <div class="col-lg-12 col-md-12 col-sm-12">
          <h3>Bình luận sản phẩm</h3>
          <form onClick= {(e)=> e.preventDefault() } >
            <div class="form-group">
              <label>Tên:</label>
              <input
                value={values.name}
                name="comm_name"
                required
                type="text"
                class="form-control"
                onChange={handleNameInputChange}
              />
            </div>
            <div class="form-group">
              <label>Email:</label>
              <input
                value={values.email}
                name="comm_mail"
                required
                type="email"
                class="form-control"
                id="pwd"
                onChange={handleEmailInputChange}
              />
            </div>
            <div class="form-group">
              <label>Nội dung:</label>
              <textarea
                value = {values.content}
                name="comm_details"
                required
                rows="8"
                class="form-control"
                onChange={handleContentInputChange}
              ></textarea>
            </div>
            <div >
              <button onClick={sendValues} type="submit" name="sbm" class="btn btn-primary">
                Gửi
            </button>
            </div>
          </form>
        </div>
      </div>
        </div>
    )
}
