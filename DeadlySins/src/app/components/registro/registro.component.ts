import { Component } from '@angular/core';
import { NgForm, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: []
})
export class RegistroComponent  {

 razas = [{ 
   codigo: "gue", nombre:'Guerrero'
  }
  ,
  { 
    codigo: "gue", nombre: 'Guerrero'
  }
  ,
  { codigo: "gue", nombre:'Guerrero'
}
,
{
   codigo: "gue", nombre:'Guerrero'
}
,
{ 
  codigo: "gue", nombre:'Guerrero'
}
,
{ codigo: "gue", nombre:'Guerrero'
}
,
{ 
  codigo: "gue", nombre:'Guerrero'
}
,
{ 
  codigo: "gue", nombre:'Guerrero'
}]

  forma:FormGroup;

  constructor() { 

    this.forma = new FormGroup({
      'familia': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'correo': new FormControl('', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
      'password': new FormControl('', [Validators.required, Validators.minLength(7)]),
      'telefono': new FormControl('', [Validators.minLength(9), Validators.pattern("[0-9]")]),
      'rol': new FormControl('0', [Validators.minLength(3)]),
      'estado': new FormControl('0', [ Validators.minLength(1), Validators.maxLength(1)]),
    })

  }
  guardarCambios(forma:NgForm){
    console.log("this.forma.value --->", this.forma.value);
    console.log("this.forma --->", this.forma);
  }



}