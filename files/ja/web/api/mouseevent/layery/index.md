---
title: "MouseEvent: layerY プロパティ"
short-title: layerY
slug: Web/API/MouseEvent/layerY
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef("UI Events")}}{{Non-standard_Header}}

**`MouseEvent.layerY`** は読み取り専用のプロパティで、現在のレイヤーに関連するイベントの垂直座標を返します。

このプロパティは、ページのスクロールを考慮し、文書全体からの相対値を返します。ただし、位置指定された要素内でイベントが発生した場合は、位置指定された要素の左上からの相対値が返されます。

## 値

整数値で、マウスイベントが発生したときのマウスポインターのピクセル単位の Y 座標です。

## 例

```html
<html lang="en">
  <head>
    <title>pageX\pageY & layerX\layerY example</title>

    <script>
      function showCoords(evt) {
        const form = document.forms.form_coords;
        const parent_id = evt.target.parentNode.id;
        form.parentId.value = parent_id;
        form.pageXCoords.value = evt.pageX;
        form.pageYCoords.value = evt.pageY;
        form.layerXCoords.value = evt.layerX;
        form.layerYCoords.value = evt.layerY;
      }
    </script>

    <style>
      #d1 {
        border: solid blue 1px;
        padding: 20px;
      }

      #d2 {
        position: absolute;
        top: 180px;
        left: 80%;
        right: auto;
        width: 40%;
        border: solid blue 1px;
        padding: 20px;
      }

      #d3 {
        position: absolute;
        top: 240px;
        left: 20%;
        width: 50%;
        border: solid blue 1px;
        padding: 10px;
      }
    </style>
  </head>

  <body onmousedown="showCoords(event)">
    <p>To display the mouse coordinates please click anywhere on the page.</p>

    <div id="d1">
      <span>
        This is an un-positioned div so clicking it will return layerX/layerY
        values almost the same as pageX/PageY values.
      </span>
    </div>

    <div id="d2">
      <span>
        This is a positioned div so clicking it will return layerX/layerY values
        that are relative to the top-left corner of this positioned element.
        Note the pageX\pageY properties still return the absolute position in
        the document, including page scrolling.
      </span>

      <span>
        Make the page scroll more! This is a positioned div so clicking it will
        return layerX/layerY values that are relative to the top-left corner of
        this positioned element. Note the pageX\pageY properties still return
        the absolute position in the document, including page scrolling.
      </span>
    </div>

    <div id="d3">
      <form name="form_coords" id="form1">
        <label for="parentId">Parent Element id: </label>
        <input type="text" name="parentId" size="7" /><br />
        <label for="pageXCoords">pageX: </label>
        <input type="text" name="pageXCoords" size="7" />
        <label for="pageYCoords">pageY: </label>
        <input type="text" name="pageYCoords" size="7" /><br />
        <label for="layerXCoords">layerX: </label>
        <input type="text" name="layerXCoords" size="7" />
        <label for="layerYCoords">layerY: </label>
        <input type="text" name="layerYCoords" size="7" />
      </form>
    </div>
  </body>
</html>
```

## 仕様書

_This property is not part of any specification._

## ブラウザーの互換性

{{Compat}}
