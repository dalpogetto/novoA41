import { Component, ViewChild, inject } from '@angular/core';
import { Router } from '@angular/router';
import { PoDialogService, PoModalAction, PoModalComponent, PoNotificationService, PoTableAction, PoTableColumn } from '@po-ui/ng-components';
import { Usuario } from 'src/app/interfaces/usuario';
import { TotvsService } from 'src/app/services/totvs-service.service';

@Component({
  selector: 'app-reparos',
  templateUrl: './reparos.component.html',
  styleUrls: ['./reparos.component.css']
})
export class ReparosComponent {

  @ViewChild('telaAlterar', { static: true }) telaAlterar: | PoModalComponent | undefined;

//---Injection
private srvTotvs = inject(TotvsService);
private srvNotification = inject(PoNotificationService);
private srvDialog = inject(PoDialogService);
private router = inject(Router)

codEstabel: string = '';
codUsuario: string = '';
nrProcess:string='';
loadTela:boolean=false

lEQV:boolean=false

listaReparos:any[]=[

  { codFilial: '08'
    , codEstabel: '131'
    ,itCodigo: '58.131.000256-2B'
    ,qtdReparos: 1
    ,temEquival: false
    ,itEquivalente: ''
    ,enc: '123'
    ,numSerie: '5670000'
},
{ codFilial: '08'
, codEstabel: '131'
,itCodigo: '58.131.000256-2B'
,qtdReparos: 1
,temEquival: true
,itEquivalente: ''
,enc: '123'
,numSerie: '5670000'
}
]
colunasReparos!:PoTableColumn[]
cJustificativa!:string

readonly acaoSalvar: PoModalAction = {
  label: 'Salvar',
  action: () => { this.onSalvar() },
}


readonly acaoCancelar: PoModalAction = {
  label: 'Cancelar',
  action: () => { this.onCancelar() }
}

//--- Actions
readonly acoesGrid: PoTableAction[] = [
  {
    label: 'Editar',
    icon: 'bi bi-pencil-square',
    action: this.onEditar.bind(this),
  },
  {
    separator:true,
    label: 'Eliminar',
    icon: 'bi bi-trash',
    action: this.onDeletar.bind(this),
    type:'danger'
  }];

  ngOnInit(): void {

    this.srvTotvs.EmitirParametros({tituloTela: 'HTMLA41 - CRIAÇÃO DE REPAROS'});

    this.srvTotvs.ObterUsuario().subscribe({
      next:(response:Usuario)=>{
        
        if (response === undefined){
          this.LogarUsuario()
        }
        else{
          this.codEstabel = response.codEstabelecimento
          this.codUsuario = response.codUsuario
          this.nrProcess  = response.nrProcesso
          this.srvTotvs.EmitirParametros({tituloTela: 'HTMLA41 - CRIAÇÃO DE REPAROS'});
       }
      }
    })

    this.colunasReparos = this.srvTotvs.obterColunasReparos()

   }

   LogarUsuario() {
    this.router.navigate(['seletor'], {queryParams:{redirectTo:'reparos'}}) 
 }

 onDeletar(obj:any){
 }

 onEditar(obj:any){
  console.log(obj)
  this.telaAlterar?.open()

 }

 onSalvar(){

 }

 onCancelar(){

 }
 habilitarCampos(){

 }
}
