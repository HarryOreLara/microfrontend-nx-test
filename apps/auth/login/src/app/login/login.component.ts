import { Component } from '@angular/core';

import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { StyleClassModule } from 'primeng/styleclass';
import { CarouselModule } from 'primeng/carousel';
import { RouterModule } from '@angular/router';
@Component({
  imports: [
    CommonModule,
    RouterModule,
    StyleClassModule,
    CheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    DividerModule,
    CarouselModule,
    InputTextModule,
  ],
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
})
export class LoginComponent {
  title = 'login';
  constructor() {
    console.log('LoginComponent initialized');
  }

  features = [
    {
      title: 'Ducati Panigale V4',
      text: 'The Ducati Panigale V4 is a high-performance sportbike that combines cutting-edge technology with Italian design. It features a powerful 1,103cc V4 engine, advanced aerodynamics, and a lightweight chassis for exceptional handling and speed.',
      image:
        'https://www.sc-project.com/wp-content/uploads/2020/07/Ducati_Panigale-V4R_Completo_Replica_SBK_my2020_3-4Anteriore_960x720px.png',
    },
    {
      title: 'BMW M 1000 RR',
      text: 'The BMW S1000 RR is a track-focused superbike that delivers unparalleled performance and precision. With its 999cc inline-four engine, advanced electronics, and aerodynamic design, it offers an exhilarating riding experience on both the road and the racetrack.',
      image:
        'https://images.tractorjunction.com/bike_prodect_banner_2_1a0d432b03.png?format=webp&quality=40',
    },
    {
      title: 'CBR 600 RR',
      text: 'The CBR 600 RR is a legendary sportbike known for its agility and performance. With a 599cc inline-four engine, it offers a perfect balance of power and handling, making it a favorite among riders who crave excitement on the track and the street.',
      image:
        'https://www.motoplanete.com/honda/zoom-700px/10225-CBR-600-RR-2024-1000px.webp',
    },
    {
      title: 'Kawasaki Ninja ZX-6R',
      text: 'The Kawasaki Ninja ZX-6R is a high-performance supersport motorcycle that combines power, agility, and cutting-edge technology. With its 636cc inline-four engine, it delivers thrilling acceleration and precise handling, making it a favorite among sportbike enthusiasts.',
      image:
        'https://images.squarespace-cdn.com/content/v1/639bda5c64492137de0500b9/1671413226387-OBPT7J58L54WPXB1UFM5/9949ca1e-452f-4d3f-b9ba-6bed761591ea.jpg?format=1000w',
    },
    {
      title: 'Yamaha YZF-R7',
      text: 'The Yamaha YZF-R7 is a sportbike that combines modern styling with a powerful 689cc inline-twin engine. It offers a perfect blend of performance and comfort, making it suitable for both track days and everyday riding.',
      image:
        'https://www.yamaha-motor.com.pe/file/products/SuperSport-R7-689-bloque06-imagen03-v01-yamaha.jpg',
    },
  ];
}
