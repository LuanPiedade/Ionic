import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Produto } from '../model/produto';
import { ProdutoService } from '../services/produto-service';





@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

 
  constructor(
    private alertController: AlertController,
  ) {}
  
  produto = new Produto()
  produtoService = new ProdutoService ();

  async presentAlert(tipo: string, texto: string) {
    const alert = await this.alertController.create({
      header: tipo,
      //subHeader: 'Important message',
      message: texto,
      buttons: ['OK'],
    });

    await alert.present();
  }

  save(){
    this.produtoService.add(this.produto);
    console.log(this.produto);
    this.presentAlert("Aviso", "Produto Cadastrado");
    
    
  }

  
}
