import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverelements = [{type:'server', name:'Testserver', content:'Just a test'}];

  onBlueprintAdded(blueprintData:{serverName:string, serverContent:string}) {
     this.serverelements.push({
       type:'blueprint',
       name: blueprintData.serverName,
       content:blueprintData.serverContent
     });
}

onServerAdded(serverData:{serverName:string, serverContent:string}) {
     this.serverelements.push({
       type:'server',
       name: serverData.serverName,
       content:serverData.serverContent
     });
}
}
