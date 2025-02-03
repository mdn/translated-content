---
title: "Escape de classes de caracteres unicode: \\p{...}, \\P{...}"
slug: Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape
---

{{jsSidebar}}

Um **escape de classe de caracteres unicode** é um tipo de [escape de classe de caracteres](/pt-BR/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape) que corresponde a um conjunto de caracteres especificado por uma propriedade Unicode. Este escape é suportado apenas no [modo compatível com Unicode](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode). Quando o marcador [`v`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets) está habilitado, também pode ser usado para corresponder com textos de tamanho finito.

{{InteractiveExample("taller")}}

```js interactive-example
const sentence = 'A ticket to 大阪 costs ¥2000 👌.';

const regexpEmojiPresentation = /\p{Emoji_Presentation}/gu;
console.log(sentence.match(regexpEmojiPresentation));
// Expected output: Array ["👌"]

const regexpNonLatin = /\P{Script_Extensions=Latin}+/gu;
console.log(sentence.match(regexpNonLatin));
// Expected output: Array [" ", " ", " 大阪 ", " ¥2000 👌."]

const regexpCurrencyOrPunctuation = /\p{Sc}|\p{P}/gu;
console.log(sentence.match(regexpCurrencyOrPunctuation));
// Expected output: Array ["¥", "."]

```

## Sintaxe

```regex
\p{propriedadeSolitaria}
\P{propriedadeSolitaria}

\p{propriedade=valor}
\P{propriedade=valor}
```

### Parâmetros

- `propriedadeSolitaria`

  - : Nome ou valor de uma propriedade Unicode solitária, seguindo a mesma sintaxe como `valor`. Ela especifica o valor para a propriedade `General_Category` (Categoria Geral), ou um [nome binário de propriedade (en-US)](https://tc39.es/ecma262/multipage/text-processing.html#table-binary-unicode-properties). No modo [`v`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets), também pode ser uma [propriedade Unicode binária de textos (en-US)](https://tc39.es/ecma262/multipage/text-processing.html#table-binary-unicode-properties-of-strings).

    > [!NOTE]
    > A sintaxe [ICU (en-US)](https://unicode-org.github.io/icu/userguide/strings/unicodeset.html#property-values) permite omitir o nome da propriedade `Script` também, mas o JavaScript não suporta isso, porque na maioria dos casos a propriedade `Script_Extensions` é mais útil que a `Script`.

- `propriedade`
  - : O nome de uma propriedade Unicode. Deve ser composto de letras {{Glossary("ASCII")}} (`A–Z`, `a–z`) e underscores (`_`), e deve ser um dos [nome de propriedades não binárias (en-US)](https://tc39.es/ecma262/multipage/text-processing.html#table-nonbinary-unicode-properties).
- `valor`
  - : O valor de uma propriedade Unicode. Deve ser composto de letras (`A–Z`, `a–z`), underscores (`_`), e dígitos (`0–9`), e deve ser um dos valores suportados listados em [`PropertyValueAliases.txt (en-US)`](https://unicode.org/Public/UCD/latest/ucd/PropertyValueAliases.txt).

## Descrição

`\p` e `\P` são suportados apenas no [modo compatível com Unicode](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode). No modo compatível com Unicode, eles são [escapes de caracteres](/pt-BR/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) para o caractere `p` ou `P`.

Todo caracter Unicode possui um conjunto de propriedades que o descreve. Por exemplo, o caracter [`a (en-US)`](https://util.unicode.org/UnicodeJsps/character.jsp?a=0061) possui a propriedade `General_Category` com o valor `Lowercase_Letter`, e a propriedade `Script` com o valor `Latn`. As sequências de escape `\p` e `\P` permitem encontrar caracteres com base em suas propriedades. Por exemplo, `a` pode corresponder a `\p{Lowercase_Letter}` (o nome da propriedade `General_Category` é opcional) assim como `\p{Script=Latn}`. `\P` cria uma _classe complementar_ que consiste de pontos de código sem a propriedade especificada.

Para compor múltiplas propriedades, use a sintaxe de [intersecção de conjunto de caracteres](/pt-BR/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#v-mode_character_class) habilitada com o marcador `v`, ou veja [padrão de subtração e intersecção](/pt-BR/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion#pattern_subtraction_and_intersection).

No modo `v`, `\p` pode corresponder a uma sequências de pontos de código, definida no Unicode como "propriedades de textos". Isto é mais útil para emojis, que são frequentemente compostos por múltiplos pontos de código. Contudo, `\P` pode apenas complementar as propriedades do caracter.

> [!NOTE]
> Existem planos de portar a funcionalidade de propriedades de texto para o modo `u` também.

## Exemplos

### Categorias gerais

Categorias gerais são utilizada para classificar caracteres Unicode e subcategorias estão disponíveis para definir uma categorização mais precisa. É possível utilizar ambas as formas, curta ou longa, no escape de uma propriedade Unicode.

Elas podem ser utilizadas para corresponder a letras, números, símbolos, pontuações, espaços, etc. Para uma lista mais extensa de categorias gerais, por favor consulte [a especificação Unicode (en-US)](https://unicode.org/reports/tr18/#General_Category_Property).

```js
// encontrando todas as letras de um texto
const estoria =
  "É o Gato Listrado: agora eu deve ter alguém com quem conversar.";

// Forma mais explícita
estoria.match(/\p{General_Category=Letter}/gu);

// Não é obrigatório usar o nome da propriedade para categorias gerais
estoria.match(/\p{Letter}/gu);

// Isso é equivalente (forma curta):
estoria.match(/\p{L}/gu);

// Isso também é equivalente (conjunção de todas as subcategorias usando a forma curta)
estoria.match(/\p{Lu}|\p{Ll}|\p{Lt}|\p{Lm}|\p{Lo}/gu);
```

### Escritas e extensões de escritas

Algumas linguagens utilizam escritas diferentes para escrever seus sistemas. Por exemplo, inglês e espanhol são escritos utilizando latim enquanto árabe e russo são escritos utilizando outras escritas (respectivamente árabe e cirílico). As propriedades Unicode `Script` e `Script_Extensions` permitem que expressões regulares correspondam com caracteres de acordo com a escrita com a qual elas são amplamente utilizadas (`Script`) ou de acordo com o conjunto de escritas as quais elas pertencem (`Script_Extensions`).

Por exemplo, `A` pertence a escrita `Latin` (latim) e `ε` a escrita `Greek` (Grega).

```js
const caracteresMisturados = "aεЛ";

// Utilizando o canonico nome "longo" da escrita
caracteresMisturados.match(/\p{Script=Latin}/u); // a

// Utilizando a forma curta (código ISO 15924) para a escrita
caracteresMisturados.match(/\p{Script=Grek}/u); // ε

// Utilizando o nome curto sc para a propriedade Script
caracteresMisturados.match(/\p{sc=Cyrillic}/u); // Л
```

Para mais detalhes, consulte [a especificação Unicode (en-US)](https://unicode.org/reports/tr24/#Script), a [especificação ECMAScript da tabela de escritas (en-US)](https://tc39.es/ecma262/multipage/text-processing.html#table-unicode-script-values), e a [lista de códigos de escritas ISO 15924 (en-US)](https://unicode.org/iso15924/iso15924-codes.html).

Se o caracter é utilizado em um conjunto limitado de escritas, a propriedade `Script` vai apenas combinar para a escrita "predominantemente" utilizada. Se nós queremos que os caracteres correspondam com base na escrita "não predominante", nós podemos utilizar a propriedade `Script_Extensions` (`Scx` para a forma curta).

```js
// ٢ é o dígito 2 na notação Árabe-Índico
// enquanto ela é predominantemente escrita com a escrita Árabe
// ela ainda pode ser escrita na escrita Thaana

"٢".match(/\p{Script=Thaana}/u);
// null já que Thaana não é a escrita predominante

"٢".match(/\p{Script_Extensions=Thaana}/u);
// ["٢", index: 0, input: "٢", groups: undefined]
```

### Escape de propriedades Unicode vs. Classes de caracteres

Com expressões regulares no JavaScript, também é possível usar [classes de caracteres](/pt-BR/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) e especialmente `\w` ou `\d` que correspondem a letras ou dígitos. Contudo, essas formas apenas correspondem a caracteres da escrita _Latin_ (em outras palavras, de `a` à `z` e de `A` à `Z` para `\w` e de `0` à `9` para `\d`). Conforme mostrado [neste exemplo](/pt-BR/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes#looking_for_a_word_from_unicode_characters), o trabalho com textos que não seguem a escrita Latim pode ser um pouco desajeitado.

Categorias de escape de propriedades Unicode abrangem muito mais caracteres e `\p{Letter}` ou `\p{Number}` vai funcionar para qualquer escrita.

```js
// Tentando usar faixas de valores para evitar as limitações do \w:

const textoQueNaoELatim = "Приключения Алисы в Стране чудес";
const regexpPalavraBMP = /([\u0000-\u0019\u0021-\uFFFF])+/gu;
// BMP vai de U+0000 à U+FFFF mas o espaço é U+0020

console.table(textoQueNaoELatim.match(regexpPalavraBMP));

// Usando escapes de propriedades Unicode ao invés disso
const regexpUPE = /\p{L}+/gu;
console.table(textoQueNaoELatim.match(regexpUPE));
```

### Correspondendo à preços

O exemplo a seguir corresponde a preços em um texto:

```js
function pegarPrecos(str) {
  // Sc significa "currency symbol" (Símbolo de moeda)
  return [...str.matchAll(/\p{Sc}\s*[\d.,]+/gu)].map((match) => match[0]);
}

const str = `Rolinhos California $6.99
Rolinhos crocantes $8.49
Tempura de camarão $10.99`;
console.log(pegarPrecos(str)); // ["$6.99", "$8.49", "$10.99"]

const str2 = `Loja nos EUA $19.99
Loja na Europa €18.99
Loja no Japão ¥2000`;
console.log(pegarPrecos(str2)); // ["$19.99", "€18.99", "¥2000"]
```

### Correspondendo à textos

Com o marcador `v`, `\p{…}` pode corresponder a textos que são potencialmente mais longos do que um caracter utilizando as propriedades de textos:

```js
const marcador = "🇺🇳";
console.log(marcador.length); // 2
console.log(/\p{RGI_Emoji_Flag_Sequence}/v.exec(marcador)); // [ '🇺🇳' ]
```

Contudo, você não pode usar `\P` para corresponder a "um texto que não tem uma propriedade", porque não é claro quantos caracteres devem ser usados.

```js-nolint example-bad
/\P{RGI_Emoji_Flag_Sequence}/v; // SyntaxError: Invalid regular expression: Invalid property name
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- Guia [Classes de caracteres](/pt-BR/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes)
- [Expressões regulares](/pt-BR/docs/Web/JavaScript/Reference/Regular_expressions)
- [Classe de caracter: `[...]`, `[^...]`](/pt-BR/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
- [Espace de classe de caracter: `\d`, `\D`, `\w`, `\W`, `\s`, `\S`](/pt-BR/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape)
- [Escape de caracter: `\n`, `\u{...}`](/pt-BR/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)
- [Disjunção: `|`](/pt-BR/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)
- [Propriedade de caracter Unicode (en-US)](https://en.wikipedia.org/wiki/Unicode_character_property) na Wikipédia
- [ES2018: Escapes de propriedades de RegExp Unicode (en-US)](https://2ality.com/2017/07/regexp-unicode-property-escapes.html) por Dr. Axel Rauschmayer (2017)
- [Propriedades § de expressões regulares Unicode (en-US)](https://unicode.org/reports/tr18/#Categories)
- [Utilidades do Unicode: UnicodeSet (en-US)](https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp)
- [RegExp marcador v com conjunto de notações e propriedades de texto (en-US)](https://v8.dev/features/regexp-v-flag) no v8.dev (2022)
