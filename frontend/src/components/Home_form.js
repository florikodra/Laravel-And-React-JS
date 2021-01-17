import React, { Component } from "react";


class Home_form extends Component{
    
    submit3 = false;

    constructor(props){
        super(props);
        this.submit = true;

        //this.else = this.elsefunc(this);
        //this.reset = this.resetSubmit.bind(this);

    }
    
    else(){
       this.submit3 = false;
    }
    resetSubmit(){
        this.submit3 = true;
    }

    render(){
        if(this.submit3){
        return(
            <React.Fragment>
            <div class="col-lg-6 col-md-6 col-sm-12 get-started-form">
          <h4>Let us get to know you better.</h4>
        
          <form>
            <div class="form-row">
              <div class="col-lg-6 col-md-6 col-sm-12">
                <div class="form-group">
                  <input type="text" class="form-control" placeholder="First Name" required />
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12">
                <div class="form-group">
                  <input type="text" class="form-control" placeholder="Last Name" required />
                </div>
              </div>
              <div class="col-lg-12 col-md-12 col-sm-12">
                <div class="form-group">
                  <input type="email" class="form-control" placeholder="Email" />
                </div>
              
                <div class="form-group">
                  <input type="tel" class="form-control" placeholder="Phone Number" />
                </div>

                <div class="form-group">
                  <label>Tell us a bit more about your project:</label>
                  <textarea class="form-control" rows="5" placeholder="What’s the biggest challenge your marketing team is now facing? Where would you like to be in 6 months from now with your marketing?"></textarea>
                </div>

                <div class="form-group">
                  <label>What areas of marketing are you interested in?: *</label>
                  <div class="areas-of-marketing">
                    <label class="label-checkbox">
                    <input type="checkbox" name="areas[]" />
                    Paid Media and Social</label>
                    <label class="label-checkbox">
                    <input type="checkbox" name="areas[]" />
                    Content</label>
                    <label class="label-checkbox">
                    <input type="checkbox" name="areas[]" />
                    Growth Strategy</label>
                    <label class="label-checkbox">
                    <input type="checkbox" name="areas[]" />
                    Tools and Integrations</label>
                    <label class="label-checkbox">
                    <input type="checkbox" name="areas[]" />
                    Lead Generation</label>
                    <label class="label-checkbox">
                    <input type="checkbox" name="areas[]" />
                    Design or development</label>
                  </div>
                </div>
                
                <div class="form-group">
                  <label>What’s your monthly budget look like?*</label>
                  <select name="budget" class="form-control dropdown">
                    <option>Select Your Amount</option>
                  </select>
                </div>

              </div>

              <div class="col-12 col-md-12">
                <button type="submit" name="submit" onClick={this.resetSubmit()} class="btn btn-block btn-lg btn-primary form-submit">START YOUR PROJECT</button>
              </div>
            </div>
          </form>
        </div>
        </React.Fragment>

        );
        }else{
            return(
                <button onClick={this.reset}>Reset</button>
            );
        }
    }
}
export default Home_form;