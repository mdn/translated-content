---
title: MathML
slug: Web/MathML
page-type: landing-page
browser-compat: mathml.elements.math
spec-urls: https://w3c.github.io/mathml/
sidebar: mathmlref
l10n:
  sourceCommit: 9ba3ab2c48fb51423f811d329818071e4c79caca
---

**Язык математической разметки (MathML)** — язык на основе [XML](/ru/docs/Web/XML) для описания математической нотации.

Изначально MathML разрабатывался как универсальная спецификация для браузеров, офисных пакетов, [систем компьютерной алгебры](https://en.wikipedia.org/wiki/Computer_algebra_system), средств чтения [EPUB](https://www.w3.org/publishing/epub33/) и генераторов на основе [LaTeX](https://en.wikipedia.org/wiki/LaTeX). Однако такой подход плохо подходил для веба: [семантическая часть](https://w3c.github.io/mathml/#contm) так и не была реализована в браузерах, а [часть, отвечающая за математическую компоновку](https://w3c.github.io/mathml/#presm), привела к неполной и неодинаковой поддержке в браузерах.

[MathML Core](https://w3c.github.io/mathml-core/) — подмножество MathML с более подробными правилами реализации, основанными на [LaTeX](https://en.wikipedia.org/wiki/LaTeX) и [формате Open Font](https://learn.microsoft.com/en-us/typography/opentype/spec/math). Оно предназначено для браузеров и разработано с учётом совместной работы с другими веб-стандартами, включая [HTML](/ru/docs/Web/HTML), [CSS](/ru/docs/Web/CSS), [DOM](/ru/docs/Web/API/Document_Object_Model) и [JavaScript](/ru/docs/Web/JavaScript).

Ниже приведены ссылки на документацию, примеры и инструменты для работы с MathML. В качестве справочной спецификации MDN использует [MathML Core](https://w3c.github.io/mathml-core/), однако из-за непоследовательной истории стандартизации устаревшие возможности MathML всё ещё встречаются в существующих реализациях и веб-содержимом.

> [!NOTE]
> Разработчикам и авторам настоятельно рекомендуется перейти на MathML Core, при необходимости дополнив недостающие возможности другими веб-технологиями. Рабочая группа Math поддерживает набор [полифилов MathML](https://github.com/w3c/mathml-polyfills), которые упрощают такой переход.

## Учебные материалы

[Учебные материалы по MathML](/ru/docs/Web/MathML/Tutorials) знакомят с темой с самого начала и постепенно переходят к более сложным приёмам. Предварительный опыт не требуется.

- [MathML для начинающих](/ru/docs/Web/MathML/Tutorials/For_beginners)
  - : В этом руководстве вы научитесь создавать математические формулы с помощью структурированной разметки. Сначала мы расскажем, как добавить MathML в HTML-документ, а затем подробно разберём основные элементы: дроби и корни, индексы и текстовые контейнеры. После этого рассмотрим табличную компоновку матриц и другие способы оформления формул. В заключительном задании вы примените полученные знания и воссоздадите три знаменитые математические формулы.

## Руководства

[Руководства по MathML](/ru/docs/Web/MathML/Guides) помогут использовать MathML на веб-страницах. Они содержат советы по написанию разметки, выбору редакторов и шрифтов и другие рекомендации.

- [Создание разметки MathML](/ru/docs/Web/MathML/Guides/Authoring)
  - : Советы по созданию разметки MathML, выбору редакторов и интеграции их вывода в веб-содержимое.
- [Шрифты для MathML](/ru/docs/Web/MathML/Guides/Fonts)
  - : Инструкции по установке математических шрифтов, необходимых для правильного отображения MathML в браузерах.

## Справочник

[Справочник MathML](/ru/docs/Web/MathML/Reference) содержит описания элементов и атрибутов MathML, представленные на MDN.

- [Справочник по элементам MathML](/ru/docs/Web/MathML/Reference/Element)
  - : Описание каждого элемента MathML и сведения о его совместимости с настольными и мобильными браузерами.
- [Справочник по глобальным атрибутам MathML](/ru/docs/Web/MathML/Reference/Global_attributes)
  - : Сведения о глобальных атрибутах MathML, применимых ко всем элементам.
- [Справочник по атрибутам MathML](/ru/docs/Web/MathML/Reference/Attribute)
  - : Сведения об атрибутах MathML, которые изменяют внешний вид или поведение элементов.
- [Значения атрибутов MathML](/ru/docs/Web/MathML/Reference/Values)
  - : Дополнительные сведения о значениях атрибутов MathML.

## Примеры

Ниже приведены примеры, которые помогут разобраться в использовании MathML.

### Формулы MathML

В следующих демонстрациях показаны математические понятия возрастающей сложности в веб-содержимом.

- [Доказательство теоремы Пифагора](/ru/docs/Web/MathML/Guides/Proving_the_Pythagorean_theorem)
  - : Небольшой пример доказательства теоремы Пифагора.
- [Вывод квадратной формулы](/ru/docs/Web/MathML/Guides/Deriving_the_quadratic_formula)
  - : Вывод квадратной формулы.
- [Тест MathML от Mozilla](https://fred-wang.github.io/MathFonts/mozilla_mathml_test/)
  - : Исходный тест проекта MathML от Mozilla. Он содержит примеры из [книги ТеХа](https://en.wikipedia.org/wiki/Computers_and_Typesetting) и изображения, созданные с помощью TeX.

### Другие веб-технологии

В следующих демонстрациях MathML сочетается с другими веб-технологиями для создания сложного содержимого.

- [Пользовательский элемент `<la-tex>`](https://fred-wang.github.io/TeXZilla/examples/customElement.html)
  - : [Пользовательский элемент](/ru/docs/Web/API/Web_components/Using_custom_elements), который принимает содержимое на [LaTeX](https://en.wikipedia.org/wiki/LaTeX).
- [Демонстрация магнитного поля](https://fred-wang.github.io/TeXZilla/examples/toImageWebGL.html)
  - : Трёхмерное представление магнитного поля с помощью [SVG](/ru/docs/Web/SVG) и [WebGL](/ru/docs/Web/API/WebGL_API).
- [Συνάρτηση ζήτα Ρήμαν (el)](https://fred-wang.github.io/MathFonts/%CE%A3%CF%85%CE%BD%CE%AC%CF%81%CF%84%CE%B7%CF%83%CE%B7_%CE%B6%CE%AE%CF%84%CE%B1_%CE%A1%CE%AE%CE%BC%CE%B1%CE%BD.html)
  - : Статья на греческом о дзета-функции Римана, использующая [веб-шрифты](/ru/docs/Learn_web_development/Core/Text_styling/Web_fonts) Греческого общества шрифтов.
- [Уравнение Пелля](https://people.igalia.com/fwang/pell-bigint-mathml/)
  - : Программа на JavaScript для решения уравнения Пелля с помощью [`BigInt`](/ru/docs/Web/JavaScript/Reference/Global_Objects/BigInt).
- [Программа Ады Лавлейс для вычисления чисел Бернулли](https://people.igalia.com/fwang/lovelace-jsclass-mathml/)
  - : Эмулятор программы Ады Лавлейс для вычисления чисел Бернулли с помощью [приватных элементов](/ru/docs/Web/JavaScript/Reference/Classes/Private_elements).

## Помощь сообщества

- [Главная страница W3C Math](https://www.w3.org/Math/)
- [Сообщить о проблеме в репозитории w3c/mathml на GitHub](https://github.com/w3c/mathml/issues)
- [Архив рассылки www-math на w3.org](https://lists.w3.org/Archives/Public/www-math/)

## Инструменты

- [Валидатор W3C](https://validator.w3.org/)
- [Страница инструментов Math в вики W3C](https://www.w3.org/wiki/Math_Tools)

## Связанные темы

- [CSS](/ru/docs/Web/CSS)
- [HTML](/ru/docs/Web/HTML)
- [SVG](/ru/docs/Web/SVG)

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
