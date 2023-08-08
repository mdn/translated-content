---
title: data-*
slug: Web/HTML/Global_attributes/data-*
---

> **Note:** {{HTMLSidebar("Global_attributes")}}

Os [atributos globais](/pt-BR/docs/Web/HTML/Global_attributes) **data-\*** formam uma classe de atributos conhecida como **custom data attributes**, a qual permite que informações proprietárias sejam trocadas via script entre o [HTML](/pt-BR/docs/Web/HTML) e sua representação [DOM](/pt-BR/docs/DOM) . Todos esses dados personalizados estão disponíveis através da interface {{domxref("HTMLElement")}} do elemento, onde o atributo está definido. A propriedade {{domxref("HTMLElement.dataset")}} concede acesso a estes atributos .
O `*` pode ser substituído por qualquer nome, desde que siga [a regra de criação de nomes xml](https://www.w3.org/TR/REC-xml/#NT-Name) com as seguintes restrições:

- O nome não deve começar com xml, independente da caixa destas letras (Ex: XML, xml, XMl, XmL, ...);
- O nome não deve conter ponto e vírgula (`U+003A`);
- O nome não deve conter letras maiúsculas.

Observe que a propriedade {{domxref("HTMLElement.dataset")}} é uma {{domxref("DOMStringMap")}}, e o nome da custom data attribute _data-test-value_ será acessível através do `HTMLElement.dataset.testValue` ( ou `HTMLElement.dataset["testValue"]` ) e todo o traço (`U+002D`) será substituído pela capitalização(tornar maiúscula) da letra subsequente, deixando o nome no formato camelcase.

### Uso

Para adicionar atributos **data-\*** , mesmo os elementos HTML mais comuns podem tornar-se mais complexos e poderosos objetos programáveis. Por exemplo, um "[sprite](<https://en.wikipedia.org/wiki/Sprite_(computer_graphics)>)_"_ de uma nave espacial em um jogo pode ser um simples elemento {{HTMLElement("img")}} com um atributo [class](/pt-BR/docs/Web/HTML/Global_attributes/class) e diversos atributos data-\*:

```
<img class="spaceship cruiserX3" src="shipX3.png"
  data-navio-id="324"   data-armas="laserI laserII"   data-escudos="72%"
  data-x="414354" data-y="85160" data-z="31940"
  onclick="navesespaciais[this.dataset.shipId].explodida()"
</img>
```

(Veja mais _[aqui](https://html.spec.whatwg.org/multipage/dom.html#embedding-custom-non-visible-data-with-the-data-*-attributes))_

## Especificações

| Specification                                                                                                  | Status                   | Comment                                                                           |
| -------------------------------------------------------------------------------------------------------------- | ------------------------ | --------------------------------------------------------------------------------- |
| {{SpecName('HTML WHATWG', "dom.html#embedding-custom-non-visible-data-with-the-data-*-attributes", "data-*")}} | {{Spec2('HTML WHATWG')}} | No change from latest snapshot, {{SpecName('HTML5.1')}}                           |
| {{SpecName('HTML5.1', "dom.html#embedding-custom-non-visible-data-with-the-data-*-attributes", "data-*")}}     | {{Spec2('HTML5.1')}}     | Snapshot of {{SpecName('HTML WHATWG')}}, no change from {{SpecName('HTML5 W3C')}} |
| {{SpecName('HTML5 W3C', "dom.html#embedding-custom-non-visible-data-with-the-data-*-attributes", "data-*")}}   | {{Spec2('HTML5 W3C')}}   | Snapshot of {{SpecName('HTML WHATWG')}}, initial definition.                      |

## Compatibilidade com navegadores

{{Compat("html.global_attributes.data_attributes")}}

## See also

- All [global attributes](/pt-BR/docs/Web/HTML/Global_attributes).
- The {{domxref("HTMLElement.dataset")}} property that allows to access and modify these values.
