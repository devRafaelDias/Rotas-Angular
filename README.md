# 🚀 Rotas com Angular

Este é um pequeno tutorial sobre como gerenciar **rotas** no framework Angular.

---

## 📌 Criando o Projeto

Crie um novo projeto Angular com o comando:

```bash
ng new routing-app
```

---

## 📌 Criando os Componentes

Agora, crie os componentes que serão usados nas rotas:

```bash
ng g c first
ng g c second
```

---

## 📌 Importando as Bibliotecas Necessárias

No arquivo **`app.component.ts`**, importe **RouterLink**, **RouterLinkActive** e **RouterOutlet**:

```typescript
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'routing-app';
}
```

---

## 📌 Definindo as Rotas

### 🔹 Importando os Componentes

No arquivo **`app.routes.ts`**, importe os componentes criados:

```typescript
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
```

### 🔹 Configurando as Rotas

No arquivo **`app.config.ts`**, defina a configuração das rotas:

```typescript
export const appConfig: ApplicationConfig = {
  providers: [providerRouter(routes)]
};
```

Agora, no arquivo **`app.routes.ts`**, defina as rotas:

```typescript
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'first', component: FirstComponent },
  { path: 'second', component: SecondComponent },
  // Redireciona para a primeira rota caso a URL esteja vazia
  { path: '', redirectTo: '/first', pathMatch: 'full' },
  // Caso a rota especificada não seja encontrada
  { path: '**', component: NotfoundpageComponent },
];
```

---

## 📌 Adicionando as Rotas na Interface

No arquivo **`app.component.html`**, adicione um menu de navegação para acessar as rotas:

```html
<h1>Angular Router App</h1>
<nav>
  <ul>
    <li><a routerLink="/first" routerLinkActive="active" ariaCurrentWhenActive="page">First Component</a></li>
    <li><a routerLink="/second" routerLinkActive="active" ariaCurrentWhenActive="page">Second Component</a></li>
    <li><a routerLink="aaa" routerLinkActive="active" ariaCurrentWhenActive="page">Teste</a></li>
  </ul>
</nav>

<!-- Onde o conteúdo da rota será carregado -->
<div id="routes">
  <router-outlet></router-outlet>
</div>
```

---

## 🎯 Executando o Projeto

Para testar as rotas, execute o seguinte comando no terminal:

```bash
ng serve --open
```

Agora, acesse:
- **`http://localhost:4200/first`** → Para ver o **FirstComponent**
- **`http://localhost:4200/second`** → Para ver o **SecondComponent**

Caso digite uma rota inválida, será redirecionado para o componente **NotfoundpageComponent**.

---