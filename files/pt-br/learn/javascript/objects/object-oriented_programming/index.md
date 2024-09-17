---
title: Programação Orientada a Objetos
slug: Learn/JavaScript/Objects/Object-oriented_programming
l10n:
  sourceCommit: bc0d0d1ef796435e969f6d65c7e5d3c08f4023aa
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Objects/Object_prototypes", "Learn/JavaScript/Objects/Classes_in_JavaScript", "Learn/JavaScript/Objects")}}

A Programação Orientada a Objetos (POO) é um paradigma de programação fundamental para muitas linguagens de programação, como por exemplo Java e C++, e surgiu pela necessidade de abstrair problemas computacionais para soluções mais próximas do mundo real tangível (daí que advém os tais objetos).

Nesse artigo, será feita a conceitualização dos seguintes princípios ou conceitos básicos que regem esse paradigma de maneira geral: Classes e instâncias de Classe, Herança e Encapsulamento.
Inicialmente estes conceitos serão descritos sem referências particulares ao JavaScript, para facilitar a absorção dos conceitos, e por isso a maioria dos exemplos serão dados em {{Glossary("Pseudocode", "pseudocode")}}.

> [!NOTE]
> De forma mais precisa, os aspectos descritos aqui são de um estilo particular de POO chamado de **baseada em classe**, **orientada à classes** ou POO "clássica". Geralmente esse é o estilo referenciado quando se discute sobre programação orientada a objetos.

Depois da introdução dos conceitos mencionados anteriormente, o próximo passo é observar, em JavaScript, como construtores de classe e a cadeia de protótipos se relacionam com esses conceitos e em quê elas se diferem. Isso será aprofundado no próximo artigo, onde abordaremos alguns recursos adicionais do JavaScript que tornam bem mais fácil implementar programas orientados a objetos.

<table>
  <tbody>
    <tr>
      <th scope="row">Pré-requisitos:</th>
      <td>
        entendimento de funções no JavaScript e familiaridade com as noções básicas de JavaScript
        (veja
        <a href="/pt-BR/docs/Learn/JavaScript/First_steps">Primeiros Passos</a> e
        <a href="/pt-BR/docs/Learn/JavaScript/Building_blocks"
          >Programando em JavaScript</a
        >), e noções básicas de JavaScript Orientado a Objetos (JSOO) (veja
        <a href="/pt-BR/docs/Learn/JavaScript/Objects/Basics"
          >Introdução ao básico sobre Objetos</a
        > e <a href="/pt-BR/docs/Learn/JavaScript/Objects/Object_prototypes">Protótipos de objetos</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Entender os conceitos básicos da programação orientada a objetos baseada em classes.
      </td>
    </tr>
  </tbody>
</table>

A programação orientada a objetos pode ser entendida como a modelagem de um sistema como uma coleção de objetos, onde cada objeto representa algum aspecto particular do sistema. Objetos contêm em si tanto funções (ou métodos) quanto dados em campos (também conhecidos como propriedades ou atributos). 

Um objeto fornece uma interface pública para outras partes do código que desejam utilizá-lo, mas mantém o seu próprio estado, privativo e interno; Outras partes do sistema não devem preocupar-se com o que acontece dentro do objeto.

## Classes e instâncias

Quando modelamos um problema dentro dos limites de objetos em POO, criamos definições abstratas representando os tipos de objetos que desejamos ter em nosso sistema. Por exemplo, se estamos modelando uma escola, é desejável ter objetos representando professores. Cada professor possui propriedades em comum: todos eles tem um nome e uma matéria que lecionam. Além disso, cada professor pode executar algumas ações: atribuir notas ao corrigir uma atividade e apresentar-se aos alunos no começo do ano escolar, por exemplo.

Portanto `Professor` poderia ser uma **classe** no nosso sistema. A definição da classe lista os dados e os métodos que cada professor possui.

Em pseudocódigo, uma classe denominada `Professor` poderia ser escrita dessa forma:

```plain
classe Professor
    propriedades
        nome
        leciona
    metodos
        atribuiNota(atividade)
        apresentaSe()
```

Isto define uma classe `Professor` com:

- Duas propriedades de dados: `nome` e `leciona`;
- Dois métodos: `atribuiNota()` para atribuir nota a uma atividade e `apresentaSe()` para introduzir-se aos alunos.

Em si mesma, uma classe é incapaz de fazer qualquer coisa: ela funciona como um tipo de modelo esquemático para construir objetos concretos daquele tipo. Cada objeto professor que nós criarmos é considerada uma **instância** da classe `Professor`. O processo de criação de uma instância é realizada por uma função especial chamada de **construtor**. Nós passamos valores das propriedades, definidas na classe como parâmetros do construtor, para qualquer um dos estados internos do objeto que queremos inicializar na nova instância.

De maneira geral, o construtor é escrito como parte da definição da classe e é usual que esse tenha o mesmo nome da própria classe:

```plain
classe Professor
    propriedades
        nome
        leciona
    construtor
        Professor(nome, leciona)
    metodos
        atribuiNota(atividade)
        apresentaSe()
```

Este construtor exemplificado acima recebe dois parâmetros, assim podemos inicializar as propriedades `nome` e `leciona` sempre que criarmos um novo professor.

Agora que estamos munidos das noções do que é um construtor, para quê e como utilizá-lo, podemos então partir para a criação de alguns professores, dessa vez com JavaScript. Linguagens de programação frequentemente usam uma palavra-chave `new` para sinalizar a chamada para o construtor quando criamos uma nova instância da classe em questão.

```js
walsh = new Professor("Walsh", "Psicologia");
lillian = new Professor("Lillian", "Poesia");

walsh.leciona; // 'Psicologia'
walsh.apresentaSe(); // 'Meu name é professor Walsh e eu serei o seu professor de Psicologia para esse ano.'

lillian.leciona; // 'Poesia'
lillian.apresentaSe(); // 'Meu nome é professora Lillian e eu serei a sua professora de Poesia desse ano.'
```

Dessa forma criamos dois objetos, ambos instâncias da classe `Professor`.

## Herança

Suponha que em nossa escola também queremos representar alunos. Ao contrário de professores, alunos não podem atribuir notas ao corrigir atividades, não lecionam matérias e pertencem a uma turma escolar definida por ano.

Porém, alunos também tem um nome e talvez queiram apresentar-se aos colegas de turma, então podemos escrever a definição de uma classe Aluno dessa forma:

```plain
classe Aluno
    propriedades
        nome
        ano
    construtor
        Aluno(nome, ano)
    metodos
        apresentaSe()
```

Seria bastante útil se pudessemos representar o fato que alunos e professores compartilham algumas propriedades entre si ou, de forma mais precisa, o fato de que em algum grau elas são _o mesmo tipo de coisa_. A herança nos deixa fazer esse tipo de representação.

Para começar, é possível observar que tanto alunos quanto professores são pessoas, que podem ter nomes e querer apresentar-se para outras pessoas. Para modelar essa proximidade entre as classes Aluno e Professor, podemos definir uma nova classe chamada `Pessoa`, na qual é possível definir todas as propriedades comuns de pessoas. Com isso, `Professor`e `Aluno` podem herdar de `Pessoa`, adicionando as propriedades adicionais presentes nela.

```plain
classe Pessoa
    propriedades
        nome
    construtor
        Pessoa(nome)
    metodos
        apresentaSe()

classe Professor : extends Pessoa
    propriedades
        leciona
    construtor
        Professor(nome, leciona)
    metodos
        atribuiNota(atividade)
        apresentaSe()

classe Aluno : extends Pessoa
    propriedades
        ano
    construtor
        Aluno(nome, ano)
    metodos
        apresentaSe()
```

Nesse caso, podemos afirmar que `Pessoa`é a **superclasse** ou **classe mãe** das classes `Professor` e `Aluno` e reciprocamente que `Professor` e `Aluno` são **subclasses** ou **classes filhas** de `Pessoa`.

Também é possível notar que o método `apresentaSe()` é definido nas três classes. O motivo para isso acontecer é que, enquanto pessoas podem querer apresentar-se para outras, a maneira de fazer isso varia de pessoa para pessoa:

```js
walsh = new Professor("Walsh", "Psicologia");
walsh.apresentaSe(); // 'Meu nome é Professor Walsh e eu serei o seu professor da disciplina de Psicologia.'

summers = new Aluno("Summers", 1);
summers.apresentaSe(); // 'Meu nome é Summers e sou da turma A do primeiro ano.'
```

Nós podemos criar uma implementação padrão para o método `apresentaSe()` que serve para pessoas que não são classificadas como sendo alunos _ou_ professores:

```js
pratt = new Pessoa("Pratt");
pratt.apresentaSe(); // 'Meu nome é Pratt.'
```

Essa característica - de um método ter o mesmo nome mas implementação diferente em classes diferentes - é chamado **Polimorfismo**. Quando a implementação de um método em uma subclasse substitui a implementação desse método presente na sua superclasse, podemos falar que ocorreu a **sobrescrita** do método.

## Encapsulamento

Como dito no começo deste artigo, objetos fornecem uma interface para outras partes do código que desejam interagir com esses objetos mas mantêm seu próprio estado interno. O estado interno do objeto é mantido **privado**, o que significa que somente os próprios métodos do objeto podem acessá-lo, permanecendo oculto para métodos de outros objetos. Ao adotarmos estas práticas, de manter o estado interno do objeto privado ou oculto para outros objetos e criar uma distinção clara entre a sua interface pública e seu estado interno privado, fazemos o chamado **encapsulamento** desse objeto.

Essa é uma característica muito útil para programação pois permite mudar a implementação interna de um objeto sem precisar procurar e atualizar cada parte do código que o utiliza individualmente: podemos comparar isso como se fosse uma barreira de proteção ou firewall entre esse objeto e o resto do sistema.

Suponha, por exemplo, que alunos só podem matricular-se na matéria extracurricular de tiro com arco esportivo oferecida pelo clube de arquearia caso estejam cursando o segundo ano ou algum outro ano acima. Nós poderíamos implementar isso simplesmente expondo a propriedade `ano` do aluno em questão (que é uma instância da classe `Aluno`) para que outra parte do código examine e decida se aquele aluno pode ou não matricular-se no curso de tiro com arco esportivo.

```js
if (aluno.ano > 1) {
  // permite que o aluno matricule-se na turma de tiro com arco esportivo
}
```

O problema em fazer dessa forma é, caso seja decidido mudar os critérios que decidem se um aluno pode ou não participar da turma de tiro com arco esportivo - como por exemplo requerer além do aluno cursar determinado ano, a permissão dos pais ou responsável legal - seria necessário atualizar cada uma das partes da nossa base de código que executa ou depende desse teste. Seria muito melhor ter um método `podeEstudarTiroComArco()` propriamente definido nos objetos de tipo `Aluno` e que implementa essa lógica em um só lugar. O resultado disso em pseudocódigo ficaria:

```plain
classe  Aluno : extends Pessoa
    propriedades
       ano
    construtor
       Aluno(nome, ano)
    metodos
       apresentaSe()
       podeEstudarTiroComArco() { return this.ano > 1 }
```

```js
if (aluno.podeEstudarTiroComArco()) {
  // permite que o aluno matricule-se na turma de tiro com arco esportivo
}
```

Assim, caso seja necessário mudar as regras dos critérios para poder participar do tiro com arco esportivo, só é necessário atualizar o que está dentro da classe `Aluno` e o código que a utiliza continuará funcionando.

Em muitas das linguagens que oferecem suporte para o paradigma de POO podemos fazer o encapsulamento de um objeto, evitando assim que outras partes do código interfiram no estado interno desse objeto, ao marcar algumas de suas propriedades com a seguinte palavra-chave `private`. Com isso, caso algum código fora do objeto tente acessar algo que esteja marcado dessa maneira, resultará em erro e uma mensagem sinalizando o motivo, variando conforme a linguagem em questão. Em pseudocódigo podemos escrever como ficaria a propriedade `ano` da classe `Aluno` com essa marcação:

```plain
classe Aluno : extends Pessoa
    propriedades
       private ano
    construtor
        Aluno(nome, ano)
    metodos
       apresentaSe()
       podeEstudarTiroComArco() { return this.ano > 1 }

aluno = new Aluno('Weber', 1)
aluno.ano // error: não foi possível acessar 'ano'
```

Em linguagens que não dão suporte para o acesso dessa forma tais como Python, programadores utilizam algumas regras de nomeação como iniciar o nome com `_` (underscore) para indicar que aquela propriedade deve ser tratada como privada.

## Programação Orientada a Objetos (POO) e Javascript

Neste artigo, foram descritas algumas das características básicas da programação orientada a objetos baseada em classes da maneira em que elas seriam adaptadas do nosso pseudocódigo, com algumas adaptações, para implementação em linguagens como Java e C++.

Nos dois antigos anteriores, demos uma olhada em alguns recursos centrais do JavaScript: [construtores](/pt-BR/docs/Learn/JavaScript/Objects/Basics) e [protótipos](/pt-BR/docs/Learn/JavaScript/Objects/Object_prototypes). Esses recursos de certa maneira possuem algum tipo de relação com os conceitos da POO que apresentamos até agora.

- **construtores** em Javascript nos provêem com algo parecido com uma definição de classe, o que nos dá o poder de definir a "forma" de um objeto, incluindo quaisquer métodos nele contidos, em um lugar só. Porém, protótipos também podem ser usados com essa finalidade. Para exemplificar, se um método é definido na propriedade `prototype` de um construtor, logo todos os objetos criados a partir daquele construtor recebem esse método por meio de seu protótipo e não precisaremos defini-lo no construtor.

- **a cadeia de protótipos** pode parecer então uma forma natural de estabelecer herança entre as classes. Por exemplo, se tivermos um objeto `Aluno` cujo protótipo é `Pessoa`, então o objeto poderá **_herdar_** a propriedade `nome` e **_sobrescrever_** o método `apresentaSe()`.

Contudo é importante ressaltar as diferenças existentes entre esses recursos e os conceitos da POO "clássica" como eles foram descritos e é isso o que faremos a seguir.

Para começar, na POO baseada em classes, as classe e os objetos são entidades separadas e objetos sempre são criados como instâncias de classe. Além disso, há uma distinção entre a característica usada para definir uma classe (a sintaxe da classe em si) e a característica usada para instanciar um objeto (o construtor). No JavScript, é possível e frequente a criação de objetos sem qualquer definição separada de classe, seja com o uso de uma função ou um objeto literal. Essa peculiaridade do JavaScript permite que as operar com objetos seja bem mais leve se comparado com linguagens que operam estritamente conforme a POO clássica.

Em segundo lugar, apesar de uma cadeia de protótipos parecer-se com e, em algumas partes, comportar-se tal como uma hierarquia de herança padrão, no final existem diferenças que tornam ambas distintas entre si. Quando uma subclasse é instanciada, um único objeto é criado de forma tal que ele combina propriedades definidas na subclasse com as propriedades definidas na superclasse mais acima na cadeia hierárquica. Com o uso de protótipos, cada nível da hierarquia é representado por um objeto segregado distinto e todos esses objetos são coligados através da propriedade `proto`. O comportamento da cadeia de protótipos de fato é bem mais parecido com **delegação** do que herança. Delegação é um padrão de programação no qual um objeto, quando solicitado para realizar uma tarefa, pode fazê-la por conta própria ou pedir para outro objeto (**seu delegado**) fazê-la em seu favor. De várias maneiras, a delegação é um jeito mais flexível e dinâmico de combinar objetos se compararmos com a herança, bem mais rígida e estática (uma dessas maneiras trata da possibilidade de mudar ou substituir totalmente o delegado em tempo de execução).

Tendo dito isso, construtores e protótipos podem ser utilizados para implementar padrões POO baseados em classe no JavaScript sem maiores problemas. Só é preciso atentar que usá-los para diretamente implementar recursos como herança é algo complicado, então o JavaScript oferece recursos adicionais, em sobreposição ao modelo de protótipos, que mapeiam mais proximamente aos conceitos da POO baseada em classes. Esses recursos adicionais são assunto do próximo artigo.

## Resumo

Esse artigo descreveu algumas das características básicas da programação orientada a objetos baseada em classes e analisou de forma muito breve como os construtores e protótipos do JavaScript se assemelham com esses conceitos.

No próximo artigo abordaremos os recursos adicionais que o JavaScript oferece como apoio para a programação orientada a objetos "clássica".

{{PreviousMenuNext("Learn/JavaScript/Objects/Object_prototypes", "Learn/JavaScript/Objects/Classes_in_JavaScript", "Learn/JavaScript/Objects")}}
