---
title: Алгоритм обработки текста двусторонней направленности (Юникод)
slug: orphaned/Web/Guide/Unicode_Bidrectional_Text_Algorithm
---

**Алгоритм обработки текста двусторонней направленности** (Unicode® Bidirectional Algorithm или **BiDi** Algorithm) — раздел стандарта текста Unicode, описывающий в каком порядке раскладываются символы во время обработки страницы {{Glossary("агентом пользователя")}}.
Этот алгоритм полезен при создании локализированного веб-контента.

В руководстве рассказывается о том, как работает BiDi алгоритм и как его применить. Алгоритм непосредственно связан с {{Glossary("HTML")}} и {{Glossary("CSS")}}, при обработке которых определяется порядок и направление символов в тексте.

## Основы

(Базовое направление, типы символов, и т.д.)

## Алгоритм

### Уровни направленности символов

### Directional runs

(Что это, что такое базовое направление)

### Символы нейтральной направленности

## Overriding the algorithm

Content about using HTML and CSS to override the default behavior of the algorithm; include info about isolating ranges etc.

### Overiding BiDi using Unicode control characters

Unicode provides a number of special control characters that make it possible to control directionality of ranges of text. There are two sets of control characters; one set opens the override, and another restores the original directionality. You must always follow each opening character with an appropriate closing character.

| Character                     | Code point | HTML entity | Markup equivalent | Description                                                                                                                                                    |
| ----------------------------- | ---------- | ----------- | ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Left-to-Right Isolate (LRI)   | U+2066     | `&#x2066;`  | `dir="ltr"`       | Sets the base direction to LTR, isolating the embedded content from the surrounding text                                                                       |
| Right-to-Left Isolate (LRI)   | U+2067     | `&#x2067;`  | `dir="rtl"`       | Sets the base direction to RTL, isolating the embedded content from the surrounding text                                                                       |
| First Strong Isolate (FSI)    | U+2068     | `&#x2068;`  | `dir="auto"`      | Isolates the content and sets the base direction according to the first strongly-typed directional character in the embedded content                           |
| Left-to-Right Embedding (LRE) | U+202A     | `&#x202A;`  | `dir="ltr"`       | Sets the base direction to LTR but allows the embedded text to interact with the surrounding content; this risks the effect spilling over to the outer content |
| Right-to-Left Embedding (RLE) | U+202B     | `&#x202B;`  | `dir="rtl"`       | Sets the base direction to RTL, but lets the embedded text interact with the surrounding content, risking spillover effects                                    |
| Left-to-Right Override (LRO)  | U+202D     | `&#x202D;`  | `<bdo dir="ltr">` | Overrides the BiDi algorithm, displaying the characters in memory order, from left to right                                                                    |
| Right-to-Left Override (RLO)  | U+202E     | `&#x202E;`  | `<bdo dir="rtl">` | Overrides the BiDi algorithm and displays the embedded characters in reverse memory order, from right to left                                                  |

<table class="standard-table">
  <caption>
    Closing Unicode BiDi algorithm control characters
  </caption>
  <thead>
    <tr>
      <th scope="row">Character</th>
      <th scope="col">Code point</th>
      <th scope="col">HTML entity</th>
      <th scope="col">Markup equivalent</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th rowspan="2" scope="row">Pop Directional Formatting (PDF)</th>
      <td rowspan="2">U+202C</td>
      <td rowspan="2"><code>&#x26;#x202C;</code></td>
      <td>
        Closing whatever opening tag used the <a href="/ru/docs/Web/HTML/Global_attributes#dir"><code>dir</code></a>
        attribute
      </td>
      <td>Used for RLE or LRE</td>
    </tr>
    <tr>
      <td><code>&#x3C;/bdo></code></td>
      <td>Used for RLO or LRO</td>
    </tr>
    <tr>
      <th scope="row">Pop Directional Isolate (PDI)</th>
      <td>U+2069</td>
      <td><code>&#x26;#x2069;</code></td>
      <td>
        Closing whatever opening tag used the <a href="/ru/docs/Web/HTML/Global_attributes#dir"><code>dir</code></a>
        attribute
      </td>
      <td>Used for RLI, LRI, or FSI</td>
    </tr>
  </tbody>
</table>

## Смотрите также

- [Соответствующий стандарт Юникод (Unicode® Standard Annex #9: Unicode Bidirectional Algorithm)](https://www.unicode.org/reports/tr9/)
- [W3C: Unicode Bidirectional Algorithm basics](https://www.w3.org/International/articles/inline-bidi-markup/uba-basics)
- [W3C Q\&A: How to use Unicode controls for bidi text](https://www.w3.org/International/questions/qa-bidi-unicode-controls)
