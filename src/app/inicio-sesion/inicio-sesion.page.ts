import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.page.html',
  styleUrls: ['./inicio-sesion.page.scss'],
})
export class InicioSesionPage implements OnInit {

  public user: string ='';
  public password : string ='';

  public valorUser: string = ''; 
  public valorPassword: string = ''; 
  public deshabilitado: boolean = true;

  public loginForm = new FormGroup({
    user: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required]),
    

  });



  constructor(
    private router:Router,
    private alertController:AlertController,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    
  }

  validarUser(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.valorUser = inputElement.value;
    console.log(this.valorUser);

    if(this.valorUser!='' && this.valorPassword !=''){
      this.deshabilitado = false;
    } else {
      this.deshabilitado = true;
    }
    
  }

  validarPassword(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.valorPassword = inputElement.value;
    console.log(this.valorPassword);

    if(this.valorUser!='' && this.valorPassword !=''){
      this.deshabilitado = false;
    } else {
      this.deshabilitado = true;
      this.router.navigate(['/inicio'])
    }
    
  }

  navegarARegistro() {
    this.router.navigate(['/registrarse']); // Reemplaza 'registro' con la ruta real de tu página de registro
  }

  navegarARecuperar() {
    this.router.navigate(['/recuperar-contrasenia']); 
  }

  onSubmit() {
    if (this.loginForm.valid) {
      // Ambos campos son válidos, puedes redirigir a la página perfil
      //this.presentAlert();
      //this.router.navigate(['/perfil']);
    } else {
      // Alguno de los campos no es válido, muestra una alerta
      this.router.navigate(['tabs/tab1']);
      //this.presentAlert();
    }
  }

  // async presentAlert() {
  //   const alert = await this.alertController.create({
  //   header: 'Alerta',
  //   subHeader: 'Información',
  //   message: "Usuario y/o password incorrectos",
  //   buttons: ['OK'],
  //   backdropDismiss:false,
      
  //   });

  // await alert.present();


  // }


}
