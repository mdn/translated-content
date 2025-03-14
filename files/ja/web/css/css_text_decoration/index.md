---
title: CSS テキスト装飾
slug: Web/CSS/CSS_text_decoration
l10n:
  sourceCommit: e1b6d7d2d02a07f7e86268c81678713fad4d9a5d
---

{{CSSRef}}

**CSS テキスト装飾** (CSS text decoration) は、下線、テキストの影、圏点など、テキスト装飾に関連する機能を定義します。

## リファレンス

### プロパティ

- {{cssxref("text-decoration")}}
- {{cssxref("text-decoration-color")}}
- {{cssxref("text-decoration-line")}}
- {{cssxref("text-decoration-skip-ink")}}
- {{cssxref("text-decoration-style")}}
- {{cssxref("text-decoration-thickness")}}
- {{cssxref("text-emphasis")}}
- {{cssxref("text-emphasis-color")}}
- {{cssxref("text-emphasis-position")}}
- {{cssxref("text-emphasis-style")}}
- {{cssxref("text-shadow")}}
- {{cssxref("text-underline-offset")}}
- {{cssxref("text-underline-position")}}

## 例

```css
.under {
  text-decoration: underline red;
}

.over {
  text-decoration: wavy overline lime;
}

.line {
  text-decoration: line-through;
}

.plain {
  text-decoration: none;
}

.underover {
  text-decoration: dashed underline overline;
}

.thick {
  text-decoration: solid underline purple 4px;
}

.blink {
  text-decoration: blink;
}
```

```html-nolint
<p class="under">このテキストには下付近に 1 本の線があります。</p>
<p class="over">このテキストの上に線があります。</p>
<p class="line">このテキストには取り消し線があります。</p>
<p>
  この<a class="plain" href="#">リンクには下線が引かれていません</a
  >が、リンクは一般的には既定で下線があります。ユーザーはハイパーリンクを示すアンダーラインを頼りにしていることが多いので、アンカーの文字装飾を削除する場合は注意が必要です。
</p>
<p class="underover">このテキストには上<em>と</em>下に線があります。</p>
<p class="thick">
  対応しているブラウザーでは、このテキストは実に太い紫色の下線があります。
</p>
<p class="blink">
  使用しているブラウザーによっては、このテキストは点滅しているかもしれません。
</p>
```

{{EmbedLiveSample('Examples','auto','320')}}

## 仕様書

{{Specifications}}
