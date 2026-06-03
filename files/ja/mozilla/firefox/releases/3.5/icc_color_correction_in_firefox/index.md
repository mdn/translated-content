---
title: Firefox の ICC 色補正
slug: Mozilla/Firefox/Releases/3.5/ICC_color_correction_in_Firefox
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

色補正の対応は Firefox 3 で導入されましたが、デフォルトでは無効になっています。これを有効にするには、about:config ウィンドウを少し修正する必要があります。 Firefox 3.5 では、以前のバージョンではデフォルトで無効になっていた問題が解決されました。現在 [International Color Consortium](https://www.color.org/) (ICC) タグの画像は、デフォルトで色補正されています。

下の画像は 3 つのセクションに分割されています。 左上隅には、Firefox 2 でレンダリングされた画像が表示されます。右上隅には、Firefox 3 での画像のレンダリング方法が表示されます。下には、Photoshop でレンダリングされた画像が表示されます。

![Firefox 2、Firefox 3、および Photoshop で描画された紫色の花。](iccsample.jpg)

ご覧のように、Firefox 3 と Photoshop は埋め込まれた色補正プロファイルに対応しているため、イメージを同じようにレンダリングします。 Firefox 2 はプロファイルを無視するため、色が一致しません。

## 色補正の設定

色補正は次のように、`gfx.color_management.mode` 環境設定の値を設定することで制御できます。

<table>
  <tbody>
    <tr>
      <td>値</td>
      <td>説明</td>
    </tr>
    <tr>
      <td>0</td>
      <td>
        カラーマネジメント無効。 <strong>（Firefox 3 のデフォルト）</strong>
      </td>
    </tr>
    <tr>
      <td>1</td>
      <td>完全なカラーマネジメント。</td>
    </tr>
    <tr>
      <td>2</td>
      <td>
        カラーマネジメントはタグ付き画像にのみ適用されます。
        <strong>（Firefox 3.5 でのデフォルト）</strong>
      </td>
    </tr>
  </tbody>
</table>

完全なカラーマネジメントとは、プラグインを除いて、Firefox でレンダリングされたすべての色が補正されることを意味します。

### カラープロファイルの指定

`gfx.color_management.display_profile` 環境設定の値を、使用するカラープロファイルへのパスに設定することによって、ハードウェアに使用する特定のカラープロファイルを指定することもできます。

カラープロファイルにパスが指定されていない場合、Firefox はオペレーティングシステムを照会し、設定されたカラープロファイルを使用します。

### デフォルトのレンダリングインテントの指定

さらに `gfx.color_management.rendering_intent` 環境設定の値を設定して、デフォルトのレンダリングインテントを指定することもできます。デフォルトでは、この値に -1 を指定しない限り、画像で指定されたインテントは無視されます。

次の表に、使用可能な値を示します。

<table>
  <tbody>
    <tr>
      <td>値</td>
      <td>説明</td>
    </tr>
    <tr>
      <td>-1</td>
      <td>
        埋め込まれたインテントを使用します。 デフォルトでは、画像の埋め込みインテントは無視されます。
      </td>
    </tr>
    <tr>
      <td>0</td>
      <td>
        知覚的。 画像の色調範囲全体にわたって詳細を保持するように、画像をレンダリングするように Firefox に指示します。 典型的な場合、特に写真やその他の写真の場合、一般的な画像の表示に便利です。
      </td>
    </tr>
    <tr>
      <td>1</td>
      <td>
        メディア相対比色。これは、レンダリング媒体の白色点（表示画面など）が基準媒体の白色点にマッピングされるように、カラースペクトルを再スケーリングします。 これは、参照媒体より小さな色域を有する媒体にマッピングされた色に対して最も有用です。
      </td>
    </tr>
    <tr>
      <td>2</td>
      <td>
        飽和。 これは、色相の精度を保つことを犠牲にして、色の鮮やかさを維持する。 これは、グラフや図、色調の正確な複製がそれほど重要ではないうちに、色が「ポップ」するその他のメディアに特に便利です。
      </td>
    </tr>
    <tr>
      <td>3</td>
      <td>
        ICC-絶対比色分析。 これは、スポットカラーや、色域内の色を変更しないので、あるメディアを別のものでシミュレートする場合に最も便利です。
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Firefox 3.5 では、perceptual、media-relative、saturation のインテントがすべて同じようにレンダリングされます。

### 警告

Firefox 3.5 で導入された新しい QCMS カラーマネジメントシステムは、バージョン 4 ではなく、ICC カラープロファイルのバージョン 2 のみをサポートしています。画像が暗くなりすぎることがあります。[bug 488800](https://bugzil.la/488800) と[ICC version 4 profile test](https://www.color.org/version4html.xalter) を参照してください。

## 関連情報

- [So Many Colors](https://bholley.wordpress.com/2008/09/12/so-many-colors/) （ブログ投稿）
- [Color Profiles in Firefox 3](https://johnresig.com/blog/color-profiles/) （ブログ投稿）
- [International Color Consortium](https://www.color.org/index.xalter)
