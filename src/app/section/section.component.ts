import { Component } from '@angular/core';
//import * as alertify from 'alertifyjs';
declare var alertify: any;

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent  {

 Suscripcion(){
   
   setTimeout(()=>{
      var alert = alertify.alert("Suscripción", "Suscrito a Aqualand").set('label', 'Aceptar');
    alert.set({ transition: 'slide' });
    alert.set('modal', false);
   }, 2000);
   
 }

 Pezbarbo(){
  var alert = alertify.alert("Pez Barbo", "Se trata de un pez que presenta forma ovalada, agradable y muy activo, su coloración es rosácea a anaranjada sobre un fondo base plateado, es característica una pequeña mancha que mantiene en la parte posterior de su cuerpo, un poco anterior al péndulo caudal. Existe dimorfismo sexual, ya que los machos presentan una pequeña coloración oscura en la aleta dorsal y anal, además las hembras poseen colores más apagados. En edad adulta pueden llegar a medir hasta los 14 cm de longitud.").set('label', 'Ok');
  alert.set({ transition: 'slide' });
  alert.set('modal', false);
 }

 PezEspada(){
  var alert = alertify.alert("Pez Espada", "Los peces cola de espada, también conocidos como Xipho, Portaespada o con su nombre científico Xiphophorus Helleri, pertenecen a la familia de los peces Poecillidae y al orden Cyprinodontiformes. Estos pececitos son originarios de arroyos, ríos y lagos de aguas muy cristalinas que poseen corrientes suaves, generalmente encontrados en ríos de Centroamérica.  Estos pececitos se caracterizan por tener la cola robusta, mientras que los radios inferiores de la aleta caudal de los peces macho se prolonga en forma de espada, por lo que adquieren este nombre peculiar.").set('label', 'Ok');
  alert.set({ transition: 'slide' });
  alert.set('modal', false);
 }

 PezGato(){
  var alert = alertify.alert("Pez Gato", "La gran mayoría de los ejemplares de pez gato que existen pertenecen al orden de los Siluriformes. Se le llama pez gato porque tienen unos bigotes formados de tentáculos en la boca que se asemejan a los bigotes de los gatos. Estos bigotes son llamados barbillones filamentosos. Hay algunos peces que los tienen debajo de la boca o incluso en el propio hocico. Al igual que en los gatos, estos filamentos son utilizados como órgano sensorial, detectando fácilmente el alimento que van a consumir.").set('label', 'Ok');
  alert.set({ transition: 'slide' });
  alert.set('modal', false)
 }

 PezCometa(){
  var alert = alertify.alert("Pez Cometa", "Este pez es comparado en numerosas ocasiones con otros peces de acuarios. Su tamaño es bastante menor al resto e incluso si lo comparamos con otros ejemplares de la misma familia. Se puede decir que el tamaño va variando dependiendo de las condiciones en las que habita y el tipo de alimentación que tiene. Sin embargo, por lo general, su tamaño es de menos de 10 centímetros. El peso ideal de estos peces es de media libra.").set('label', 'Ok');
  alert.set({ transition: 'slide' });
  alert.set('modal', false);
 }

 PezDisco(){
  var alert = alertify.alert("Pez Disco", "Estos peces pertenecen a la familia de los cíclidos, formando parte del orden de los perciformes. El nombre científico del pez disco es Symphysodon discus, cuyo significado se ve en la forma tan característica de estos peces. Si se les cuida correctamente y se cumplen las pautas necesarias para su buena alimentación y entorno saludable, estos peces pueden llegar a vivir hasta 12 años.").set('label', 'Ok');
  alert.set({ transition: 'slide' });
  alert.set('modal', false);
 }

 PezGurami(){
  var alert = alertify.alert("Pez Gurami", "Los guramis enanos se nombran principalmente por su pequeño tamaño en comparación con otras especies gurami. Estos peces presentan una brillante coloración azul de fondo con rayas de color naranja brillante o rojo oscuro. Debido a este patrón, la colisa lalia también se conoce como el gurami enano de bandas. Estos peces son por lo general muy tranquilos en el tanque de la comunidad - puede ser, incluso, un poco tímido. En ciertas situaciones, sin embargo, el gurami enano puede convertirse en una especie territorial, especialmente cuando se mantienen en un tanque que es demasiado pequeño. Cuando se mantienen en grandes tanques con otras especies pacíficas de la comunidad, la colisa lalia, por lo general no causa ningún problema.").set('label', 'Ok');
  alert.set({ transition: 'slide' });
  alert.set('modal', false);
 }

}
