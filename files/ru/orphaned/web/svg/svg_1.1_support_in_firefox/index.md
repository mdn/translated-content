---
title: Поддержка SVG 1.1 в Firefox
slug: orphaned/Web/SVG/SVG_1.1_Support_in_Firefox
---

Основные примеры синтаксиса и использования SVG вы можете найти в [наборе тестов W3C SVG](https://www.w3.org/Graphics/SVG/Test/20061213/).

> **Примечание:** Начиная с Gecko 2.0, Gecko поддерживает SVG-анимацию с использованием SMIL. Для краткого обзора смотрите [SVG анимация и SMIL](/ru/docs/SVG/SVG_animation_with_SMIL "SVG/SVG animation with SMIL").
> Будет подготовлена и полная документация для SVG. Когда-нибудь.

Также существует описание поддержки [Mozilla изменений в SVG 2](/ru/docs/Web/SVG/SVG_2_support_in_Mozilla).

## Статус реализации элемента

Быстрый обзор элементов [SVG 1.1](https://www.w3.org/TR/SVG11/) и текущий статус встроенной поддержки.

<table class="standard-table" style="border-collapse: separate">
  <tbody>
    <tr>
      <th>Элемент</th>
      <th>Комментарий</th>
    </tr>
    <tr>
      <th colspan="2" style="text-align: center">
        <a href="https://www.w3.org/TR/SVG11/struct.html#basic-structure-mod"
          >Structure Module</a
        >
      </th>
    </tr>
    <tr style="color: black; background-color: lightgreen">
      <td>
        <a href="https://www.w3.org/TR/SVG11/struct.html#SVGElement">svg</a>
      </td>
      <td>
        <ul>
          <li>Выполнена.</li>
          <li>
            <code>currentScale</code> и <code>currentTranslate</code> DOM, но
            нет пользовательского интерфейса панорамирования и масштабирования.
          </li>
          <li>
            SVGSVGElement
            <ul>
              <li>
                Невыполненные атрибуты: contentScriptType, contentStyleType,
                viewport, currentView
              </li>
              <li>
                Невыполненные привязки: getIntersectionList, getEnclosureList,
                checkIntersection, checkEnclosure
              </li>
            </ul>
          </li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: lightgreen">
      <td><a href="https://www.w3.org/TR/SVG11/struct.html#GElement">g</a></td>
      <td>
        <ul>
          <li>Выполнена.</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: lightgreen">
      <td>
        <a href="https://www.w3.org/TR/SVG11/struct.html#DefsElement">defs</a>
      </td>
      <td>
        <ul>
          <li>Выполнена.</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: lightgreen">
      <td>
        <a href="https://www.w3.org/TR/SVG11/struct.html#DescElement">desc</a>
      </td>
      <td>
        <ul>
          <li>Выполнена.</li>
          <li>Сохраняется только в DOM, без пользовательского интерфейса.</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: lightgreen">
      <td>
        <a href="https://www.w3.org/TR/SVG11/struct.html#TitleElement">title</a>
      </td>
      <td>
        <ul>
          <li>Выполнена.</li>
          <li>
            Заголовок <code>title</code> отображается как подсказка, когда мышь
            зависает над объектом SVG.
          </li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: lightgreen">
      <td>
        <a href="https://www.w3.org/TR/SVG11/metadata.html#MetadataElement"
          >metadata</a
        >
      </td>
      <td>
        <ul>
          <li>Выполнена.</li>
          <li>Сохраняется только в DOM, без пользовательского интерфейса.</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: lightgreen">
      <td>
        <a href="https://www.w3.org/TR/SVG11/struct.html#SymbolElement"
          >symbol</a
        >
      </td>
      <td>
        <ul>
          <li>Выполнена.</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: lightgreen">
      <td>
        <a href="https://www.w3.org/TR/SVG11/struct.html#UseElement">use</a>
      </td>
      <td>
        <ul>
          <li>Выполнена.</li>
          <li>
            Не полностью соблюдает &#x3C;svg:use> каскадные правила
            ({{Bug(265894)}}).
          </li>
          <li>
            Не передаёт события в дерево SVGElementInstance
            ({{Bug(265895)}}).
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th colspan="2" style="text-align: center">
        <a href="https://www.w3.org/TR/SVG11/struct.html#conditional-mod"
          >Conditional Processing Module</a
        >
      </th>
    </tr>
    <tr style="color: black; background-color: lightgreen">
      <td>
        <a href="https://www.w3.org/TR/SVG11/struct.html#SwitchElement"
          >switch</a
        >
      </td>
      <td>
        <ul>
          <li>Выполнена.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th colspan="2" style="text-align: center">
        <a href="https://www.w3.org/TR/SVG11/struct.html#image-mod"
          >Image Module</a
        >
      </th>
    </tr>
    <tr style="color: black; background-color: lightgreen">
      <td>
        <a href="https://www.w3.org/TR/SVG11/struct.html#ImageElement">image</a>
      </td>
      <td>
        <ul>
          <li>Выполнена.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th colspan="2" style="text-align: center">
        <a href="https://www.w3.org/TR/SVG11/styling.html#style-mod"
          >Style Module</a
        >
      </th>
    </tr>
    <tr style="color: black; background-color: lightgreen">
      <td>
        <a href="https://www.w3.org/TR/SVG11/styling.html#StyleElement"
          >style</a
        >
      </td>
      <td>
        <ul>
          <li>Выполнена.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th colspan="2" style="text-align: center">
        <a href="https://www.w3.org/TR/SVG11/shapes.html#shape-mod"
          >Shape Module</a
        >
      </th>
    </tr>
    <tr style="color: black; background-color: lightgreen">
      <td>
        <a href="https://www.w3.org/TR/SVG11/paths.html#PathElement">path</a>
      </td>
      <td>
        <ul>
          <li>Выполнена.</li>
          <li>
            Интерфейс SVGPathElement
            <ul>
              <li>
                Невыполненные атрибуты: normalizedPathSegList,
                animatedNormalizedPathSegList
              </li>
            </ul>
          </li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: lightgreen">
      <td>
        <a href="https://www.w3.org/TR/SVG11/shapes.html#RectElement">rect</a>
      </td>
      <td>
        <ul>
          <li>Выполнена.</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: lightgreen">
      <td>
        <a href="https://www.w3.org/TR/SVG11/shapes.html#CircleElement"
          >circle</a
        >
      </td>
      <td>
        <ul>
          <li>Выполнена.</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: lightgreen">
      <td>
        <a href="https://www.w3.org/TR/SVG11/shapes.html#LineElement">line</a>
      </td>
      <td>
        <ul>
          <li>Выполнена.</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: lightgreen">
      <td>
        <a href="https://www.w3.org/TR/SVG11/shapes.html#EllipseElement"
          >ellipse</a
        >
      </td>
      <td>
        <ul>
          <li>Выполнена.</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: lightgreen">
      <td>
        <a href="https://www.w3.org/TR/SVG11/shapes.html#PolylineElement"
          >polyline</a
        >
      </td>
      <td>
        <ul>
          <li>Выполнена.</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: lightgreen">
      <td>
        <a href="https://www.w3.org/TR/SVG11/shapes.html#PolygonElement"
          >polygon</a
        >
      </td>
      <td>
        <ul>
          <li>Выполнена.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th colspan="2" style="text-align: center">
        <a href="https://www.w3.org/TR/SVG11/text.html#text-mod">Text Module</a>
      </th>
    </tr>
    <tr style="color: black; background-color: lightgreen">
      <td>
        <a href="https://www.w3.org/TR/SVG11/text.html#TextElement">text</a>
      </td>
      <td>
        <ul>
          <li>Выполнена.</li>
          <li>
            Перечисленные атрибуты презентации не работают (alignment-baseline,
            baseline-shift, dominant-baseline, kerning, letter-spacing,
            word-spacing, writing-mode, glyph-orientation-horizontal,
            glyph-orientation-vertical)
          </li>
          <li>
            Недавно реализованные атрибуты презентации: direction, unicode-bidi,
            font-variant, text-decoration
          </li>
          <li>
            SVGTextElement
            <ul>
              <li>
                Недавно реализованные привязки: selectSubString
              </li>
              <li>
                Недавно реализованные атрибуты: textLength, lengthAdjust
              </li>
            </ul>
          </li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: lightgreen">
      <td>
        <a href="https://www.w3.org/TR/SVG11/text.html#TSpanElement">tspan</a>
      </td>
      <td>
        <ul>
          <li>Выполнена.</li>
          <li>
            Некоторые атрибуты презентации не работают (alignment-baseline,
            baseline-shift, dominant-baseline, kerning, letter-spacing,
            word-spacing, writing-mode, glyph-orientation-horizontal,
            glyph-orientation-vertical)
          </li>
          <li>
            Недавно реализованные атрибуты презентации: direction, unicode-bidi,
            font-variant, text-decoration
          </li>
          <li>
            SVGTSpanElement
            <ul>
              <li>
                Недавно реализованные привязки:<br />selectSubString
              </li>
              <li>
                Недавно реализованные атрибуты: textLength, lengthAdjust
              </li>
            </ul>
          </li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: salmon">
      <td style="background-color: rgb(204, 204, 204)">
        <a href="https://www.w3.org/TR/SVG11/text.html#TRefElement">tref</a>
      </td>
      <td style="background-color: rgb(204, 204, 204)">
        <ul>
          <li>
            Эта функция, представленная в раннем проекте спецификации, была
            удалена из неё и поэтому не реализована ({{Bug(273171)}}).
          </li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: lightgreen">
      <td>
        <a href="https://www.w3.org/TR/SVG11/text.html#TextPathElement"
          >textPath</a
        >
      </td>
      <td>
        <ul>
          <li>Выполнена.</li>
          <li>
            Недавно реализованные привязки:<br />selectSubString
          </li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: khaki">
      <td>
        <a href="https://www.w3.org/TR/SVG11/text.html#AltGlyphElement"
          >altGlyph</a
        >
      </td>
      <td>
        <ul>
          <li>
            Реализовано как <code>tspans</code>, никаких функций шрифта, как у
            Gecko 2.0 ({{Bug(456286)}}, {{Bug(571808)}}).
          </li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: salmon">
      <td>
        <a href="https://www.w3.org/TR/SVG11/text.html#AltGlyphDefElement"
          >altGlyphDef</a
        >
      </td>
      <td>
        <ul>
          <li>Не выполнена.</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: salmon">
      <td>
        <a href="https://www.w3.org/TR/SVG11/text.html#AltGlyphItemElement"
          >altGlyphItem</a
        >
      </td>
      <td>
        <ul>
          <li>Не выполнена.</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: salmon">
      <td>
        <a href="https://www.w3.org/TR/SVG11/text.html#GlyphRefElement"
          >glyphRef</a
        >
      </td>
      <td>
        <ul>
          <li>Не выполнена.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th colspan="2" style="text-align: center">
        <a href="https://www.w3.org/TR/SVG11/painting.html#marker-mod"
          >Marker Module</a
        >
      </th>
    </tr>
    <tr style="color: black; background-color: lightgreen">
      <td>
        <a href="https://www.w3.org/TR/SVG11/painting.html#MarkerElement"
          >marker</a
        >
      </td>
      <td>
        <ul>
          <li>Выполнена.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th colspan="2" style="text-align: center">
        <a href="https://www.w3.org/TR/SVG11/color.html#color-profile-mod"
          >Color Profile Module</a
        >
      </th>
    </tr>
    <tr style="color: black; background-color: salmon">
      <td>
        <a href="https://www.w3.org/TR/SVG11/color.html#ColorProfileElement"
          >color-profile</a
        >
      </td>
      <td>
        <ul>
          <li>Не выполнена ({{Bug(427713)}}).</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th colspan="2" style="text-align: center">
        <a href="https://www.w3.org/TR/SVG11/pservers.html#gradient-mod"
          >Gradient Module</a
        >
      </th>
    </tr>
    <tr style="color: black; background-color: lightgreen">
      <td>
        <a
          href="https://www.w3.org/TR/SVG11/pservers.html#LinearGradientElement"
          >linearGradient</a
        >
      </td>
      <td>
        <ul>
          <li>Выполнена.</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: lightgreen">
      <td>
        <a
          href="https://www.w3.org/TR/SVG11/pservers.html#RadialGradientElement"
          >radialGradient</a
        >
      </td>
      <td>
        <ul>
          <li>Выполнена.</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: lightgreen">
      <td>
        <a href="https://www.w3.org/TR/SVG11/pservers.html#StopElement">stop</a>
      </td>
      <td>
        <ul>
          <li>Выполнена.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th colspan="2" style="text-align: center">
        <a href="https://www.w3.org/TR/SVG11/pservers.html#pattern-mod"
          >Pattern Module</a
        >
      </th>
    </tr>
    <tr style="color: black; background-color: lightgreen">
      <td>
        <a href="https://www.w3.org/TR/SVG11/pservers.html#PatternElement"
          >pattern</a
        >
      </td>
      <td>
        <ul>
          <li>Выполнена.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th colspan="2" style="text-align: center">
        <a href="https://www.w3.org/TR/SVG11/masking.html#clip-mod"
          >Clip Module</a
        >
      </th>
    </tr>
    <tr style="color: black; background-color: lightgreen">
      <td>
        <a href="https://www.w3.org/TR/SVG11/masking.html#ClipPathElement"
          >clipPath</a
        >
      </td>
      <td>
        <ul>
          <li>Выполнена.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th colspan="2" style="text-align: center">
        <a href="https://www.w3.org/TR/SVG11/masking.html#mask-mod"
          >Mask Module</a
        >
      </th>
    </tr>
    <tr style="color: black; background-color: lightgreen">
      <td>
        <a href="https://www.w3.org/TR/SVG11/masking.html#MaskElement">mask</a>
      </td>
      <td>
        <ul>
          <li>Выполнена.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th colspan="2" style="text-align: center">
        <a href="https://www.w3.org/TR/SVG11/filters.html#filter-mod"
          >Filter Module</a
        >
      </th>
    </tr>
    <tr style="color: black; background-color: lightgreen">
      <td>
        <a href="https://www.w3.org/TR/SVG11/filters.html#FilterElement"
          >filter</a
        >
      </td>
      <td>
        <ul>
          <li>Выполнена.</li>
          <li>
            Из псевдо-входов:<br /><code>SourceGraphic</code>,
            <code>SourceAlpha</code>,
            <code>FillPaint</code>
            и
            <code>StrokePaint</code>
            - реализованы.
          </li>
          <li>
            Использование нереализованного псевдо-входного или фильтрующего
            элемента приведёт к игнорированию фильтра и рисованию обратного
            графика без какого-либо фильтра.
          </li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: lightgreen">
      <td>
        <a href="https://www.w3.org/TR/SVG11/filters.html#feBlendElement"
          >feBlend</a
        >
      </td>
      <td>
        <ul>
          <li>Выполнена.</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: lightgreen">
      <td>
        <a href="https://www.w3.org/TR/SVG11/filters.html#feColorMatrixElement"
          >feColorMatrix</a
        >
      </td>
      <td>
        <ul>
          <li>Выполнена.</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: lightgreen">
      <td>
        <a
          href="https://www.w3.org/TR/SVG11/filters.html#feComponentTransferElement"
          >feComponentTransfer</a
        >
      </td>
      <td>
        <ul>
          <li>Выполнена.</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: lightgreen">
      <td>
        <a href="https://www.w3.org/TR/SVG11/filters.html#feCompositeElement"
          >feComposite</a
        >
      </td>
      <td>
        <ul>
          <li>Выполнена.</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: lightgreen">
      <td>
        <a
          href="https://www.w3.org/TR/SVG11/filters.html#feConvolveMatrixElement"
          >feConvolveMatrix</a
        >
      </td>
      <td>
        <ul>
          <li>Выполнена.</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: lightgreen">
      <td>
        <a
          href="https://www.w3.org/TR/SVG11/filters.html#feDiffuseLightingElement"
          >feDiffuseLighting</a
        >
      </td>
      <td>
        <ul>
          <li>Выполнена.</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: lightgreen">
      <td>
        <a
          href="https://www.w3.org/TR/SVG11/filters.html#feDisplacementMapElement"
          >feDisplacementMap</a
        >
      </td>
      <td>
        <ul>
          <li>Выполнена.</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: lightgreen">
      <td>
        <a href="https://www.w3.org/TR/SVG11/filters.html#feFloodElement"
          >feFlood</a
        >
      </td>
      <td>
        <ul>
          <li>Выполнена.</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: lightgreen">
      <td>
        <a href="https://www.w3.org/TR/SVG11/filters.html#feGaussianBlurElement"
          >feGaussianBlur</a
        >
      </td>
      <td>
        <ul>
          <li>Выполнена.</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: lightgreen">
      <td>
        <a href="https://www.w3.org/TR/SVG11/filters.html#feImageElement"
          >feImage</a
        >
      </td>
      <td>
        <ul>
          <li>Выполнена.</li>
          <li>
            Фрагменты документа ({{bug(455986)}}) не поддерживаются в
            &#x3C;svg:feImage>.
          </li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: lightgreen">
      <td>
        <a href="https://www.w3.org/TR/SVG11/filters.html#feMergeElement"
          >feMerge</a
        >
      </td>
      <td>
        <ul>
          <li>Выполнена.</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: lightgreen">
      <td>
        <a href="https://www.w3.org/TR/SVG11/filters.html#feMergeNodeElement"
          >feMergeNode</a
        >
      </td>
      <td>
        <ul>
          <li>Выполнена.</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: lightgreen">
      <td>
        <a href="https://www.w3.org/TR/SVG11/filters.html#feMorphologyElement"
          >feMorphology</a
        >
      </td>
      <td>
        <ul>
          <li>Выполнена.</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: lightgreen">
      <td>
        <a href="https://www.w3.org/TR/SVG11/filters.html#feOffsetElement"
          >feOffset</a
        >
      </td>
      <td>
        <ul>
          <li>Выполнена.</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: lightgreen">
      <td>
        <a
          href="https://www.w3.org/TR/SVG11/filters.html#feSpecularLightingElement"
          >feSpecularLighting</a
        >
      </td>
      <td>
        <ul>
          <li>Выполнена.</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: lightgreen">
      <td>
        <a href="https://www.w3.org/TR/SVG11/filters.html#feTileElement"
          >feTile</a
        >
      </td>
      <td>
        <ul>
          <li>Выполнена.</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: lightgreen">
      <td>
        <a href="https://www.w3.org/TR/SVG11/filters.html#feTurbulenceElement"
          >feTurbulence</a
        >
      </td>
      <td>
        <ul>
          <li>Выполнена.</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: lightgreen">
      <td>
        <a href="https://www.w3.org/TR/SVG11/filters.html#feDistantLightElement"
          >feDistantLight</a
        >
      </td>
      <td>
        <ul>
          <li>Выполнена.</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: lightgreen">
      <td>
        <a href="https://www.w3.org/TR/SVG11/filters.html#fePointLightElement"
          >fePointLight</a
        >
      </td>
      <td>
        <ul>
          <li>Выполнена.</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: lightgreen">
      <td>
        <a href="https://www.w3.org/TR/SVG11/filters.html#feSpotLightElement"
          >feSpotLight</a
        >
      </td>
      <td>
        <ul>
          <li>Выполнена.</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: lightgreen">
      <td>
        <a href="https://www.w3.org/TR/SVG11/filters.html#feFuncRElement"
          >feFuncR</a
        >
      </td>
      <td>
        <ul>
          <li>Выполнена.</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: lightgreen">
      <td>
        <a href="https://www.w3.org/TR/SVG11/filters.html#feFuncGElement"
          >feFuncG</a
        >
      </td>
      <td>
        <ul>
          <li>Выполнена.</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: lightgreen">
      <td>
        <a href="https://www.w3.org/TR/SVG11/filters.html#feFuncBElement"
          >feFuncB</a
        >
      </td>
      <td>
        <ul>
          <li>Выполнена.</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: lightgreen">
      <td>
        <a href="https://www.w3.org/TR/SVG11/filters.html#feFuncAElement"
          >feFuncA</a
        >
      </td>
      <td>
        <ul>
          <li>Выполнена.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th colspan="2" style="text-align: center">
        <a href="https://www.w3.org/TR/SVG11/interact.html#cursor-mod"
          >Cursor Module</a
        >
      </th>
    </tr>
    <tr style="color: black; background-color: salmon">
      <td>
        <a href="https://www.w3.org/TR/SVG11/interact.html#CursorElement"
          >cursor</a
        >
      </td>
      <td>
        <ul>
          <li>Не выполнена ({{Bug(177193)}}).</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th colspan="2" style="text-align: center">
        <a href="https://www.w3.org/TR/SVG11/linking.html#hyperlinking-mod"
          >Hyperlinking Module</a
        >
      </th>
    </tr>
    <tr style="color: black; background-color: lightgreen">
      <td><a href="https://www.w3.org/TR/SVG11/linking.html#AElement">a</a></td>
      <td>
        <ul>
          <li>
            Исправлены только <code>xlink:href</code>, <code>xlink:show</code>,
            <code>xlink:target</code> и атрибуты заголовка
            <code>xlink:title</code>.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th colspan="2" style="text-align: center">
        <a href="https://www.w3.org/TR/SVG11/linking.html#view-mod"
          >View Module</a
        >
      </th>
    </tr>
    <tr style="color: black; background-color: lightgreen">
      <td>
        <a href="https://www.w3.org/TR/SVG11/linking.html#ViewElement">view</a>
      </td>
      <td>
        <ul>
          <li>
            Выполнено в Gecko 15.0 ({{Bug(512525)}}).
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th colspan="2" style="text-align: center">
        <a href="https://www.w3.org/TR/SVG11/script.html#scripting-mod"
          >Scripting Module</a
        >
      </th>
    </tr>
    <tr style="color: black; background-color: lightgreen">
      <td>
        <a href="https://www.w3.org/TR/SVG11/script.html#ScriptElement"
          >script</a
        >
      </td>
      <td>
        <ul>
          <li>Выполнена.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th colspan="2" style="text-align: center">
        <a href="https://www.w3.org/TR/SVG11/animate.html#animation-mod"
          >Animation Module</a
        >
      </th>
    </tr>
    <tr style="color: black; background-color: lightgreen">
      <td>
        <a href="https://www.w3.org/TR/SVG11/animate.html#AnimateElement"
          >animate</a
        >
      </td>
      <td>
        <ul>
          <li>Выполнена.</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: lightgreen">
      <td>
        <a href="https://www.w3.org/TR/SVG11/animate.html#SetElement">set</a>
      </td>
      <td>
        <ul>
          <li>Выполнена.</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: lightgreen">
      <td>
        <a href="https://www.w3.org/TR/SVG11/animate.html#AnimateMotionElement"
          >animateMotion</a
        >
      </td>
      <td>
        <ul>
          <li>Выполнена.</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: lightgreen">
      <td>
        <a
          href="https://www.w3.org/TR/SVG11/animate.html#AnimateTransformElement"
          >animateTransform</a
        >
      </td>
      <td>
        <ul>
          <li>Выполнена.</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: salmon">
      <td>
        <a href="https://www.w3.org/TR/SVG11/animate.html#AnimateColorElement"
          >animateColor</a
        >
      </td>
      <td>
        <ul>
          <li>Не выполнена ({{Bug(436296)}}).</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: lightgreen">
      <td>
        <a href="https://www.w3.org/TR/SVG11/animate.html#mpathElement"
          >mpath</a
        >
      </td>
      <td>
        <ul>
          <li>Выполнена.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th colspan="2" style="text-align: center">
        <a href="https://www.w3.org/TR/SVG11/fonts.html#font-mod"
          >Font Module</a
        >
      </th>
    </tr>
    <tr style="color: black; background-color: salmon">
      <td>
        <a href="https://www.w3.org/TR/SVG11/fonts.html#FontElement">font</a>
      </td>
      <td>
        <ul>
          <li>Не выполнена ({{Bug(119490)}}).</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: salmon">
      <td>
        <a href="https://www.w3.org/TR/SVG11/fonts.html#FontFaceNameElement"
          >font-face</a
        >
      </td>
      <td>
        <ul>
          <li>Не выполнена.</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: salmon">
      <td>
        <a href="https://www.w3.org/TR/SVG11/fonts.html#GlyphElement">glyph</a>
      </td>
      <td>
        <ul>
          <li>Не выполнена.</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: salmon">
      <td>
        <a href="https://www.w3.org/TR/SVG11/fonts.html#MissingGlyphElement"
          >missing-glyph</a
        >
      </td>
      <td>
        <ul>
          <li>Не выполнена.</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: salmon">
      <td>
        <a href="https://www.w3.org/TR/SVG11/fonts.html#HKernElement">hkern</a>
      </td>
      <td>
        <ul>
          <li>Не выполнена.</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: salmon">
      <td>
        <a href="https://www.w3.org/TR/SVG11/fonts.html#VKernElement">vkern</a>
      </td>
      <td>
        <ul>
          <li>Не выполнена.</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: salmon">
      <td>
        <a href="https://www.w3.org/TR/SVG11/fonts.html#FontFaceSrcElement"
          >font-face-src</a
        >
      </td>
      <td>
        <ul>
          <li>Не выполнена.</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: salmon">
      <td>
        <a href="https://www.w3.org/TR/SVG11/fonts.html#FontFaceNameElement"
          >font-face-uri</a
        >
      </td>
      <td>
        <ul>
          <li>Не выполнена.</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: salmon">
      <td>
        <a href="https://www.w3.org/TR/SVG11/fonts.html#FontFaceNameElement"
          >font-face-format</a
        >
      </td>
      <td>
        <ul>
          <li>Не выполнена.</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: salmon">
      <td>
        <a href="https://www.w3.org/TR/SVG11/fonts.html#FontFaceNameElement"
          >font-face-name</a
        >
      </td>
      <td>
        <ul>
          <li>Не выполнена.</li>
        </ul>
      </td>
    </tr>
    <tr style="color: black; background-color: salmon">
      <td>
        <a href="https://www.w3.org/TR/SVG11/fonts.html#DefinitionSrcElement"
          >definition-src</a
        >
      </td>
      <td>
        <ul>
          <li>Не выполнена.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th colspan="2" style="text-align: center">
        <a href="https://www.w3.org/TR/SVG11/extend.html#extensibility-mod"
          >Extensibility Module</a
        >
      </th>
    </tr>
    <tr style="color: black; background-color: lightgreen">
      <td>
        <a href="https://www.w3.org/TR/SVG11/extend.html#ForeignObjectElement"
          >foreignObject</a
        >
      </td>
      <td>
        <ul>
          <li>Выполнена.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>
