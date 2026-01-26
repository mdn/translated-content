---
title: 正規表現構文早見表
slug: Web/JavaScript/Guide/Regular_expressions/Cheatsheet
l10n:
  sourceCommit: 2c762771070a207d410a963166adf32213bc3a45
---

{{jsSidebar("JavaScript Guide")}}

このページでは、RegExp ガイドの記事の内容を集約して、RegExp 構文のすべての機能を網羅した全体的な早見表を提供します。特定のトピックに関する詳細な情報が必要な場合は、対応する見出しのリンクを辿って完全な記事にアクセスするか、[ガイド](/ja/docs/Web/JavaScript/Guide/Regular_expressions)に移動してください。

## 文字クラス

[文字クラス](/ja/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes)は、文字の種類を判別するものです。例えば、文字と数字を判別することができます。

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">文字</th>
      <th scope="col">意味</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>[xyz]<br />[a-c]</code>
      </td>
      <td>
        <p>
          <a href="/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_class"><strong>文字クラス:</strong></a>
          囲んだ文字のいずれかに一致します。ハイフンを使用して文字の範囲を指定することもできますが、ハイフンが角括弧で囲まれた最初または最後の文字として現れた場合、それは通常の文字として文字クラスに含めるためのリテラルハイフンと見なされます。
        </p>
        <p>
          例えば、 <code>[abcd]</code> は <code>[a-d]</code> と同じです。
          "brisket" の "b" や "chop" の "c" に一致します。
        </p>
        <p>
          例えば、 <code>[abcd-]</code> と <code>[-abcd]</code> は "brisket" の "b"、 "chop" の "c"、そして "non-profit" の "-" （ハイフン）に一致します。
        </p>
        <p>
          例えば、 <code>[\w-]</code> は <code>[A-Za-z0-9_-]</code> と同じです。どちらも "brisket" の "b"、 "chop" の "c"、 "non-profit" の "n" に一致します。
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <p>
          <code>[^xyz]<br />[^a-c]</code>
        </p>
      </td>
      <td>
        <p>
          <a href="/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_class"><strong>否定文字クラス:</strong></a>
          つまり、角括弧で囲まれていないもの全てに一致します。ハイフンを使用して文字の範囲を指定することができますが、ハイフンが <code>^</code> の後の最初の文字、または角括弧で囲まれた最後の文字として現れた場合、それは通常の文字として文字クラスに含めるためにリテラルハイフンと解釈されます。
          例えば、<code>[^abc]</code> は <code>[^a-c]</code> と同じです。
          これらは、最初は "bacon" の "o" や "chop" の "h" に一致します。
        </p>
        <div class="notecard note">
          <p>
            <strong>メモ:</strong> ^ の文字は<a
              href="/ja/docs/Web/JavaScript/Guide/Regular_expressions/Assertions"
              >入力の先頭</a>も意味することがあります。
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td><code>.</code></td>
      <td>
        <p>
          <a href="/ja/docs/Web/JavaScript/Reference/Regular_expressions/Wildcard"><strong>ワイルドカード:</strong></a>
          改行文字 (<code>\n</code>、<code>\r</code>、<code>\u2028</code>、<code>\u2029</code>) を除くあらゆる 1 文字と一致します。
          例えば、<code>/.y/</code> は "my" と "ay" に一致ますが、"yes make my day" の "yes" には一致しません。
          <a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/dotAll"><code>dotAll</code></a> フラグ (s) が有効な場合は、改行文字にも一致します。
          文字クラス内では <code>.</code> はその特別な意味を失い、文字通りの "." と一致します。
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\d</code></td>
      <td>
        <p>
          <a href="/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>数字文字クラスエスケープ:</strong></a>
          あらゆる（アラビア）数字に一致します。<code>[0-9]</code> に相当します。例えば <code>/\d/</code> や <code>/[0-9]/</code> は "B2 is the suite number" の "2" に一致します。
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\D</code></td>
      <td>
        <p>
          <a href="/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>非数字文字クラスエスケープ:</strong></a>
          あらゆる（アラビア）数字以外の文字に一致します。<code>[^0-9]</code> に相当します。例えば <code>/\D/</code> や <code>/[^0-9]/</code> は "B2 is the suite number" の "B" に一致します。
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\w</code></td>
      <td>
        <p>
          <a href="/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>英数文字クラスエスケープ:</strong></a>
          アンダースコアを含むあらゆる半角英数字（基本ラテンアルファベット）に一致します。 <code>[A-Za-z0-9_]</code> に相当します。例えば <code>/\w/</code> は、"apple" の "a"、"$5.28" の "5"、"3D" の "3"、"Émanuel" の "e" に一致します。
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\W</code></td>
      <td>
        <p>
          <a href="/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>非英数文字クラスエスケープ:</strong></a>
          基本ラテンアルファベットの文字以外に一致します。 <code>[^A-Za-z0-9_]</code> と同等です。例えば <code>/\W/</code> や <code>/[^A-Za-z0-9_]/</code> は、"50%" の "%" や "Émanuel" の "É" に一致します。
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\s</code></td>
      <td>
        <p>
          <a href="/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>ホワイトスペース文字クラスエスケープ:</strong></a>
          ホワイトスペース文字、例えば空白、タブ、改ページ、改行、その他の Unicode 空白文字などの 1 文字に一致します。 <code>[\f\n\r\t\v\u0020\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]</code> に相当します。例えば <code>/\s\w*/</code> は "foo bar" の "bar" に一致します。
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\S</code></td>
      <td>
        <p>
          <a href="/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>非ホワイトスペース文字クラスエスケープ:</strong></a>
          ホワイトスペース以外の 1 文字に一致します。
          <code>[^\f\n\r\t\v\u0020\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]</code> に相当します。
          例えば <code>/\S\w*/</code> は "foo bar" の "foo" に一致します。
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\t</code></td>
      <td>水平タブに一致します。</td>
    </tr>
    <tr>
      <td><code>\r</code></td>
      <td>復帰に一致します。</td>
    </tr>
    <tr>
      <td><code>\n</code></td>
      <td>行送りに一致します。</td>
    </tr>
    <tr>
      <td><code>\v</code></td>
      <td>垂直タブに一致します。</td>
    </tr>
    <tr>
      <td><code>\f</code></td>
      <td>改ページに一致します。</td>
    </tr>
    <tr>
      <td><code>[\b]</code></td>
      <td>
        後退文字に一致します。単語境界アサーション (<code>\b</code>) については<a
          href="/ja/docs/Web/JavaScript/Guide/Regular_expressions/Assertions"
          >アサーション</a
        >を参照してください。
      </td>
    </tr>
    <tr>
      <td><code>\0</code></td>
      <td>NUL 文字に一致します。この後ろに他の数字を続けてはいけません。</td>
    </tr>
    <tr>
      <td>
        <code>\c<em>X</em></code>
      </td>
      <td>
        <p>
          <a href="https://ja.wikipedia.org/wiki/
キャレット記法"
            >キャレット記法</a
          >を使用した制御文字に一致します。 "X" には A–Z の文字が入ります（コードポイント<code>U+0001</code><em>–</em><code>U+001A</code> に対応します）。例えば
          <code>/\cM\J/</code> は "\r\n" の "\r" に一致します。
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code>\x<em>hh</em></code>
      </td>
      <td>
        <code><em>hh</em></code> （2 桁の 16 進数）コードからなる文字に一致します。
      </td>
    </tr>
    <tr>
      <td>
        <code>\u<em>hhhh</em></code>
      </td>
      <td>
        <code><em>hhhh</em></code> （4 桁の 16 進数）の値からなる UTF-16 コードユニットに一致します。
      </td>
    </tr>
    <tr>
      <td>
        <code>\u<em>{hhhh}</em></code> または <code><em>\u{hhhhh}</em></code>
      </td>
      <td>
        （<code>u</code> フラグがセットされた時のみ） <code>U+<em>hhhh</em></code> または <code>U+<em>hhhhh</em></code> (16 進数) Unicode 値からなる文字に一致します。
      </td>
    </tr>
    <tr>
      <td>
        <code>\p{<em>UnicodeProperty</em>}</code>,
        <code>\P{<em>UnicodeProperty</em>}</code>
      </td>
      <td>
        <p>
          <a href="/ja/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape"><strong>Unicode 文字クラスエスケープ:</strong></a>
          Unicode 文字プロパティに基づいた文字に一致します。例えば、絵文字、日本語のカタカナ、中国語や日本語の漢字などです。
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\</code></td>
      <td>
        <p>
          次の文字を特別に扱うこと、「エスケープ」することを示します。
          その振る舞いは、2 通りのうちのどちらか 1 つです。
        </p>
        <ul>
          <li>
            通常文字の前に付けられた場合、次の文字が特別なもので、文字通りには評価されないことを示します。例えば、 <code>/b/</code> は文字 <code>"b"</code> に一致します。しかし "b" の前にバックスラッシュを置いて <code>\b</code> とすると、単語区切りを意味するようになります。
          </li>
          <li>
            特殊文字の前に付けられた場合、次の文字が特別なものでなく、文字通りに評価されることを表します。例えば、 "*" は、直前の文字が 0 個以上の出現した場合に一致することを意味する特殊文字です。例えば、 <code>/a*/</code> は 0 個以上の "a" と一致します。 <code>*</code> と文字通りに照合するには、その直前にバックスラッシュを入れます。例えば、<code>/a\*/</code> は "a*" と一致します。
          </li>
        </ul>
        <div class="notecard note">
          <p>
            <strong>メモ:</strong> この文字を文字通りに一致させるには、それ自身をエスケープしてください。つまり、 <code>\</code> を検索するには <code>/\\/</code> を使ってください。
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>|<em>y</em></code>
      </td>
      <td>
        <p>
          <a href="/ja/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction"><strong>論理和:</strong></a>
          "x" または "y" に一致します。パイプ (<code>|</code>) で区切られた各成分は、代替 (<em>alternative</em>)と呼ばれます。例えば、<code>/green|red/</code> は "green apple" の "green" と "red apple" の "red" に一致します。
        </p>
        <div class="notecard note">
          <p>
            <strong>メモ:</strong> 論理和は「選択肢の集合」を指定するもう一つの方法ですが、文字クラスではありません。論理和は独立したものではありません。大きなパターンの一部にするためには<a href="/ja/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences">グループ</a>を使用する必要があります。<code>[abc]</code> は機能的には <code>(?:a|b|c)</code> と等価です。
          </p>
        </div>
      </td>
    </tr>
  </tbody>
</table>

## アサーション

[アサーション](/ja/docs/Web/JavaScript/Guide/Regular_expressions/Assertions)には、行や単語の先頭と末尾を示す境目、他にも何らかの形で一致が可能であることを示すパターン（先読み、後読み、条件式など）が含まれます。

### 境界型のアサーション

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">文字</th>
      <th scope="col">意味</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>^</code></td>
      <td>
        <p>
          <a href="/ja/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion"><strong>入力開始境界アサーション:</strong></a>
          入力の先頭に一致します。複数行フラグ (<a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline"><code>multiline</code></a>, m) が有効である場合、改行文字の直後にも一致します。例えば <code>/^A/</code> は "an A" の "A" には一致しませんが、"An A" の先頭の "A" には一致します。
        </p>
        <div class="notecard note">
          <p>
            <strong>メモ:</strong> この文字は、<a
              href="/ja/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes"
              >文字クラス</a
            >パターンの先頭にある場合は異なる意味を持ちます。
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td><code>$</code></td>
      <td>
        <p>
          <a href="/ja/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion"><strong>入力末尾境界アサーション:</strong></a>
          入力の末尾に一致します。複数行フラグ (<a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline"><code>multiline</code></a>, m) が有効である場合、は、改行文字の直前にも一致します。例えば <code>/t$/</code> は "eater" の "t" には一致しませんが、"eat" の "t" には一致します。
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\b</code></td>
      <td>
        <p>
          <a href="/ja/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion"><strong>単語境界アサーション:</strong></a>
          単語の境界に一致します。これは、単語構成文字と後に続く非単語構成文字の間、または非単語構成文字と後に続く単語構成文字の間、または文字列の先頭・末尾です。単語の区切りは一致する「文字」ではありません。アンカーのように、単語の区切りは一致した部分に含まれません。言い換えると、一致した単語の区切りの長さは
          0 です。
        </p>
        <p>例:</p>
        <ul>
          <li><code>/\bm/</code> は "moon" の "m" に一致します。</li>
          <li>
            <code>/oo\b/</code> は "moon" の "oo" に一致しません。これは "oo" の 後に単語構成文字である "n" が続いているためです。
          </li>
          <li>
            <code>/oon\b/</code> は "moon" の "oon"
            に一致します。これは、文字列の終端であるためです。
          </li>
          <li>
            <code>/\w\b\w/</code> はどこにも一致しないでしょう。単語構成文字の後に非単語構成文字と単語構成文字の両方が続くことはありえないからです。
          </li>
        </ul>
        <p>
          バックスペース文字 (<code>[\b]</code>) については<a
            href="/ja/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes"
            >文字クラス</a
          >を見てください。
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\B</code></td>
      <td>
        <p>
          <a href="/ja/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion"><strong>非単語境界アサーション:</strong></a>
          単語以外の境界に一致します。これは、前の文字と次の文字が同じ種類である位置のことです。どちらも単語でなければならないか、または、 2 つの文字の間や 2 つの空白の間など、どちらも非単語でなければなりません。文字列の先頭と末尾は、非単語とみなされます。一致した単語の境界と同じように、一致した非単語の境界も一致に含まれません。例えば、 <code>/onBon/</code> は "at noon" の "on" に、 <code>/ye\B/</code> は "possibly yesterday" の "ye" に一致します。
        </p>
      </td>
    </tr>
  </tbody>
</table>

### その他のアサーション

> [!NOTE]
> `?` の文字は数量子としても使用されます。

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">文字</th>
      <th scope="col">意味</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>x(?=y)</code></td>
      <td>
        <p>
          <a href="/ja/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion"><strong>先読みアサーション:</strong></a>
          "x" の後に "y" が続く場合のみ "x" に一致します。例えば、 <code>/Jack(?=Sprat)/</code> は "Jack" の後に "Sprat" が続く場合のみ一致します。<br /><code>/Jack(?=Sprat|Frost)/</code> は "Jack" の後に "Sprat" または "Frost" が続く場合のみ一致します。しかし、 "Sprat" も "Frost" も一致した結果には含まれません。
        </p>
      </td>
    </tr>
    <tr>
      <td><code>x(?!y)</code></td>
      <td>
        <p>
          <a href="/ja/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion"><strong>否定先読みアサーション:</strong></a>
          "x" の後に "y" が続いていない場合のみ "x" に一致します。例えば、 <code>/\d+(?!\.)/</code> は数字の後に小数点が続かない場合のみ一致します。<code>/\d+(?!\.)/.exec('3.141')</code>は "141" には一致しますが、 "3" には一致しません。
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?&#x3C;=y)x</code></td>
      <td>
        <p>
          <a href="/ja/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion"><strong>後読みアサーション:</strong></a>
          "x" の前に "y" がある場合のみ "x" に一致します。例えば、<code>/(?&#x3C;=Jack)Sprat/</code> は、 "Jack" が先行する場合のみ、 "Sprat" に一致します。 <code>/(?&#x3C;=Jack|Tom)Sprat/</code> は、 "Jack" か "Tom" が先行する場合のみ、 "Sprat" に一致します。しかし、 "Jack" も "Tom" も一致した結果には含まれません。
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?&#x3C;!y)x</code></td>
      <td>
        <p>
          <a href="/ja/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion"><strong>否定後読みアサーション:</strong></a>
          "x" の前に "y" がない場合のみ "x" に一致します。例えば、 <code>/(?&#x3C;!-)\d+/</code> は、数字の前にマイナス記号がない場合のみ、数字に一致します。 <code>/(?&#x3C;!-)\d+/.exec('3')</code> は "3" に一致します。 <code>/(?&#x3C;!-)\d+/.exec('-3')</code> では数字の前にマイナス記号があるため、一致するものは見つかりません。
        </p>
      </td>
    </tr>
  </tbody>
</table>

## グループと後方参照

[グループと後方参照](/ja/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences)は、式の文字のグループを示します。

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">文字</th>
      <th scope="col">意味</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>(<em>x</em>)</code></td>
      <td>
        <p>
          <a href="/ja/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group"><strong>キャプチャグループ:</strong></a>
          <code><em>x</em></code> に一致し、一致した内容を記憶します。例えば <code>/(foo)/</code> は "foo bar" の "foo" に一致し、記憶します。
        </p>
        <p>
          正規表現は複数のキャプチャグループを持つことができます。結果、一般的にキャプチャグループ内の左括弧と同じ順にある、配列の要素のキャプチャグループに一致しています。たいていの場合、これはキャプチャグループ自身の順番です。これはキャプチャグループがネストしている場合に重要です。一致は結果の要素の添字 (<code>[1], …, [n]</code>) や、あらかじめ定義されている <code>RegExp</code> オブジェクトのプロパティ (<code>$1, …, $9</code>) を使ってアクセスできます。
        </p>
        <p>
          キャプチャグループはパフォーマンス上の損失があります。一致した部分文字列を使わない場合はキャプチャしない括弧（後述）を使ったほうがいいでしょう。
        </p>
        <p>
          <code
            ><a
              href="/ja/docs/Web/JavaScript/Reference/Global_Objects/String/match"
              >String.prototype.match()</a
            ></code
          > は、<code>/.../g</code> フラグが設定されている場合、グループを返しません。しかし、
          <code
            ><a
              href="/ja/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll"
              >String.prototype.matchAll()</a
            ></code
          > を使用して、すべての一致したものを取得することができます。
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?&#x3C;Name>x)</code></td>
      <td>
        <p>
          <a href="/ja/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group"><strong>名前付きキャプチャグループ:</strong></a>
          "x" に一致し、<code>&#x3C;Name></code> で指定された名前に従い、返される一致の <code>groups</code> プロパティに記憶されます。山括弧 ('<code>&#x3C;</code>' と '<code>></code>') にはグループ名が必須です。
        </p>
        <p>
          例えば、電話番号からアメリカのエリアコードを取り出す際、 <code>/\((?&#x3C;area>\d\d\d)\)/</code> を使うことができます。 結果の番号は <code>matches.groups.area</code> に表示されます。
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?:<em>x</em>)</code></td>
      <td>
        <p>
          <a href="/ja/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group"><strong>キャプチャなしグループ:</strong></a>
          "x" に一致しますが、一致した内容は記憶しません。一致した部分文字列は、結果の配列の要素 (<code>[1], …, [n]</code>) や、あらかじめ定義されている <code>RegExp</code> オブジェクトのプロパティ (<code>$1, …, $9</code>) から呼び出すことはできません。
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?<em>flags</em>:<em>x</em>)</code>, <code>(?:<em>flags</em>-<em>flags</em>:<em>x</em>)</code></td>
      <td>
        <p>
          <a href="/ja/docs/Web/JavaScript/Reference/Regular_expressions/Modifier"><strong>修飾子:</strong></a>
          指定したフラグを、囲まれたパターンに対してのみ有効または無効にします。修飾子では、<code>i</code>、<code>m</code>、<code>s</code> フラグのみ使用できます。
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code>\<em>n</em></code>
      </td>
      <td>
        <p>
          <a href="/ja/docs/Web/JavaScript/Reference/Regular_expressions/Backreference"><strong>後方参照:</strong></a>
          "n" に正の整数が入ります。正規表現内において n 番目の括弧の部分に一致した最新の部分文字列への後方参照となります（括弧の数は左からカウントします）。例えば
          <code>/apple(,)\sorange\1/</code> は "apple, orange, cherry, peach" の
          "apple, orange," に一致します。
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\k&#x3C;Name></code></td>
      <td>
        <p>
          <a href="/ja/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference"><strong>名前付き後方参照:</strong></a>
          <code>&#x3C;Name></code> で指定された<strong>名前付きキャプチャグループ</strong>に一致する最後の部分文字列の後方参照です。
        </p>
        <p>
          例えば、 <code>/(?&#x3C;title>\w+), yes \k&#x3C;title>/</code> は、 "Do you copy? Sir, yes Sir!" の中の "Sir, yes Sir" に一致します。
        </p>
        <div class="notecard note">
          <p>
            <strong>メモ:</strong> <code>\k</code> は、ここでは、名前付きキャプチャグループの後方参照を開始することを示すために使用されています。
          </p>
        </div>
      </td>
    </tr>
  </tbody>
</table>

## 数量子

[数量子](/ja/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers)は、一致する文字や表現の数を示します。

> [!NOTE]
> 以下の表の中で、*アイテム*は単一の文字だけでなく、[文字クラス](/ja/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes)や[グループと後方参照](/ja/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences)を示すこともあります。

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">文字</th>
      <th scope="col">意味</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code><em>x</em>*</code>
      </td>
      <td>
        <p>
          直前のアイテム "x" の 0 回以上の繰り返しに一致します。例えば
          <code>/bo*/</code> は "A ghost booooed" の "boooo" や "A bird warbled"
          の "b" に一致しますが、 "A goat grunted" には一致しません。
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>+</code>
      </td>
      <td>
        <p>
          直前のアイテム "x" の 1 回以上の繰り返しに一致します。<code>{1,}</code>
          と同等です。例えば <code>/a+/</code> は "candy" の "a" や
          "caaaaaaandy" のすべての "a" に一致します。
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>?</code>
      </td>
      <td>
        <p>
          直前のアイテム "x" の 0 回か 1 回の出現に一致します。例えば
          <code>/e?le?/</code> は "angel" の "el" や "angle" の "le"
          に一致します。
        </p>
        <p>
          <code>*</code>、<code>+</code>、<code>?</code>、<code>{}</code> といった数量子の直後に使用した場合、既定とは逆に、その数量子を非貪欲（出現回数が最小のものに一致）とします。既定は貪欲（出現回数が最大のものに一致）です。
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>{<em>n</em>}</code>
      </td>
      <td>
        <p>
          "n" には非負の整数が入ります。直前のアイテム "x" がちょうど "n" 回出現するものに一致します。例えば <code>/a{2}/</code> は "candy" の "a" には一致しませんが、"caandy" のすべての "a"、"caaandy" の最初の 2 つの "a" に一致します。
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>{<em>n</em>,}</code>
      </td>
      <td>
        <p>
          "n" には非負の整数が入ります。直前のアイテム "x" の少なくとも "n" 回の出現に一致します。例えば、<code>/a{2,}/</code> は "candy" の "a" には一致しませんが、"caandy" や "caaaaaaandy" の "a" のすべてに一致します。
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>{<em>n</em>,<em>m</em>}</code>
      </td>
      <td>
        <!-- cSpell:ignore cndy -->
        <p>
          ここで、"n" と "m" は非負の整数で、<code>m >= n</code> であリ、直前の項目 "x" に最小で "n" 回、最大で "m" 回一致します。
          例えば <code>/a{1,3}/</code> は "cndy" では一致せず、"candy" の 'a'、"caandy" の 最初の 2 個の "a"、"caaaaaaandy" の最初の 3 個の "a" に一致します。
          "caaaaaaandy" では元の文字列に "a" が 4 個以上ありますが、一致するのは "aaa" であることに注意してください。
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <p>
          <code><em>x</em>*?</code><br /><code><em>x</em>+?</code><br /><code
            ><em>x</em>??</code
          ><br /><code><em>x</em>{n}?</code><br /><code><em>x</em>{n,}?</code
          ><br /><code><em>x</em>{n,m}?</code>
        </p>
      </td>
      <td>
        <p>
          既定では <code>*</code> や <code>+</code> といった数量子は貪欲です。つまり、できる限り多くの文字列と一致しようとします。数量子の後に <code>?</code> の文字を指定すると、数量子が「非貪欲」になります。つまり、一致が見つかるとすぐに停止します。例えば、"some &#x3C;foo> &#x3C;bar> new &#x3C;/bar> &#x3C;/foo> thing" といった文字列が与えられた場合は、
        </p>
        <ul>
          <li>
            <code>/&#x3C;.*>/</code> は "&#x3C;foo> &#x3C;bar> new &#x3C;/bar> &#x3C;/foo>" に一致します。
          </li>
          <li><code>/&#x3C;.*?>/</code> は "&#x3C;foo>" に一致します。</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>
