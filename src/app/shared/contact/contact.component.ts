import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  contactForm!: UntypedFormGroup;
  errormessage: any = " Please enter a name*";

  messageSend:any = false

  constructor(private formBuilder: UntypedFormBuilder) { }

  ngOnInit() {

    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      subject: ['', [Validators.required]],
      comments: ['', [Validators.required]]
    });

  }

  ValidateFrom() {
    var name = this.contactForm.get("name")!.value;
    var email = this.contactForm.get("email")!.value;
    var subject = this.contactForm.get("subject")!.value;
    var comments = this.contactForm.get("comments")!.value;
    if (name == "" || name == null) {
      document.getElementById('error-msg')!.innerHTML = "<div class='alert alert-danger error_message'><i data-feather='home' class='icon-sm align-middle me-2'></i>*Please enter a name*</div>";
      return false;
    }
    if (email == "" || email == null) {
      document.getElementById('error-msg')!.innerHTML = "<div class='alert alert-danger error_message'><i data-feather='home' class='icon-sm align-middle me-2'></i>*Please enter a email*</div>";
      return false;
    }
    if (subject == "" || subject == null) {
      document.getElementById('error-msg')!.innerHTML = "<div class='alert alert-danger error_message'><i data-feather='home' class='icon-sm align-middle me-2'></i>*Please enter a subject*</div>";
      return false;
    }
    if (comments == "" || comments == null) {
      document.getElementById('error-msg')!.innerHTML = "<div class='alert alert-danger error_message'><i data-feather='home' class='icon-sm align-middle me-2'></i>*Please enter a comments*</div>";
      return false;
    }
    return true
  }

  sendMsg() {
    console.log("adasd")
    if (this.ValidateFrom()) {
      document.getElementById('error-msg')!.innerHTML =""
    }

    const templateParams = {
      from_name: this.contactForm.get('name')?.value,
      message:this.contactForm.get('comments')?.value,
      to_name:this.contactForm.get('email')?.value,
      reply_to:this.contactForm.get('subject')?.value,
    
    };
    
    emailjs
      .send('service_4rfieop', 'template_0yvmyba', templateParams, {
        publicKey: '9YwPzn3x_fXhJTIVb'
    
      })
      .then(
        (response) => {
          this.messageSend = true
          console.log('SUCCESS!', response.status, response.text);
          setTimeout(() => {
            this.messageSend = false
          }, 2000);
          this.contactForm.reset()
        },
        (err) => {
          console.log('FAILED...', err);
        },
      );


 
  }



}