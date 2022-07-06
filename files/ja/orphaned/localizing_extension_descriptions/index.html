---
title: Localizing extension descriptions
slug: orphaned/Localizing_extension_descriptions
tags:
  - Add-ons
  - Extensions
  - Internationalization
  - Localization
original_slug: Localizing_extension_descriptions
---
<h3 id="Gecko_1.9_.E3.81.AB.E3.81.8A.E3.81.91.E3.82.8B.E3.83.AD.E3.83.BC.E3.82.AB.E3.83.A9.E3.82.A4.E3.82.BA" name="Gecko_1.9_.E3.81.AB.E3.81.8A.E3.81.91.E3.82.8B.E3.83.AD.E3.83.BC.E3.82.AB.E3.83.A9.E3.82.A4.E3.82.BA">Gecko 1.9 におけるローカライズ</h3>
<p>Gecko 1.9 には、アドオンの説明や他のメタデータのローカライズに関して、新しく、より強力な方法が盛り込まれています。各言語の説明はすべて、<code>em:localized</code> プロパティを使って <a href="/ja/Install_Manifests">install.rdf</a> ファイルに書かれます。<code>em:localized</code> それぞれが、情報が使われるべきロケールを示す <code>em:locale</code> プロパティを少なくとも 1 つと、そのロケールの様々な文字列を持ちます。以下の例はこのデモです (ほとんどの一般的なマニフェストプロパティは簡潔にするため削除してあります)。</p>
<pre>&lt;?xml version="1.0"?&gt;

&lt;RDF xmlns="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
     xmlns:em="http://www.mozilla.org/2004/em-rdf#"&gt;
  &lt;Description about="urn:mozilla:install-manifest"&gt;
    &lt;em:id&gt;TabSidebar@blueprintit.co.uk&lt;/em:id&gt;
    &lt;em:localized&gt;
      &lt;Description&gt;
        &lt;em:locale&gt;de-DE&lt;/em:locale&gt;
        &lt;em:name&gt;Tab Sidebar&lt;/em:name&gt;
        &lt;em:description&gt;Zeigt in einer Sidebar Vorschaubilder der Inhalte aller offenen Tabs an.&lt;/em:description&gt;
      &lt;/Description&gt;
    &lt;/em:localized&gt;
    &lt;em:localized&gt;
      &lt;Description&gt;
        &lt;em:locale&gt;es-ES&lt;/em:locale&gt;
        &lt;em:name&gt;Tab Sidebar&lt;/em:name&gt;
        &lt;em:description&gt;Muestra una vista previa de sus pestañas en su panel lateral.&lt;/em:description&gt;
      &lt;/Description&gt;
    &lt;/em:localized&gt;
    &lt;em:localized&gt;
      &lt;Description&gt;
        &lt;em:locale&gt;nl-NL&lt;/em:locale&gt;
        &lt;em:name&gt;Tab Sidebar&lt;/em:name&gt;
        &lt;em:description&gt;Laat voorbeeldweergaven van uw tabbladen in de zijbalk zien.&lt;/em:description&gt;
      &lt;/Description&gt;
    &lt;/em:localized&gt;
    &lt;em:name&gt;Tab Sidebar&lt;/em:name&gt;
    &lt;em:description&gt;Displays previews of your tabs in your sidebar.&lt;/em:description&gt;
  &lt;/Description&gt;
&lt;/RDF&gt;
</pre>
<p>後で述べるメタデータはすべてこの方法でローカライズできます。<code>em:localized</code> プロパティによって提供されるローカライズ情報は、後述の一連のローカライズされたプロパティファイルで上書きされます。</p>
<p>あるロケールに対してどの <code>em:localized</code> プロパティを使用するかを選択する手順は以下のようになります。</p>
<ol>
 <li>そのロケールに完全に一致する <code>em:locale</code> でプロパティが提供されていた場合、それが使われます。</li>
 <li>部分的に一致するロケールが見つかった場合、最も一致する部分が多いロケールが使用されます。各部はダッシュで分割されます (例えば es は es-ES に一致し、その逆も同様です)。</li>
 <li>一致する部分の数が同じロケールが複数存在する場合は、もっとも一般的なロケールが使用されます (例えば、en-US を検索する際、en は en-GB よりも優先されます)。</li>
</ol>
<p>現在のアプリケーションロケールが検索された後、フォールバックとして en-US を検索します。</p>
<p>プロパティファイルが設定されておらず、現在のロケールや en-US に一致する <code>em:localized</code> プロパティが存在しない場合は、インストール定義ファイルで直接指定されたプロパティが、Gecko 1.9 以前で常に使われていたように、最後の手段として使われます。</p>
<h3 id="Gecko_1.9_.E4.BB.A5.E5.89.8D.E3.81.AE.E3.83.AD.E3.83.BC.E3.82.AB.E3.83.A9.E3.82.A4.E3.82.BA" name="Gecko_1.9_.E4.BB.A5.E5.89.8D.E3.81.AE.E3.83.AD.E3.83.BC.E3.82.AB.E3.83.A9.E3.82.A4.E3.82.BA">Gecko 1.9 以前のローカライズ</h3>
<p>Gecko 1.9 以前では、アドオン開発者は、Firefox や Thunderbird のようなツールキットベースのアプリケーションを対象とする拡張機能にローカライズされた説明を定義するためには以下のような特別な手順が必要でした。</p>
<ul>
 <li>もしあなたが <a href="/ja/Localizing_an_extension#Localizing_strings_in_JavaScript_code">ローカライズしたプロパティファイル</a> を作っていないのであれば、それを作ってください。他言語が正しく表示されるように、(BOM なしの)UTF-8 エンコードを使うことを忘れないでください。</li>
 <li>次の 1 行を、各言語のローカライズしたプロパティファイルに加えてください (EXTENSION_ID はあなたの拡張機能の ID (<a href="/ja/Install_Manifests">install.rdf</a> の <code>&lt;em:id&gt;</code> にあります) に合わせてください。また、<var>LOCALIZED_DESCRIPTION</var> にはその言語での拡張機能の説明を入れてください)。
  <pre>extensions.EXTENSION_ID.description=LOCALIZED_DESCRIPTION</pre>
 </li>
</ul>
<ul>
 <li>もしあなたが <a href="/ja/Building_an_Extension#Defaults_Files">デフォルト設定ファイル</a> を作っていないのであれば、それを作ってください。</li>
 <li>次の 1 行を、デフォルト設定ファイルに加えてください (<var>EXTENSION_ID</var> は拡張機能の ID (<a href="/ja/Install_Manifests">install.rdf</a> から)、<var>PATH_TO_LOCALIZATION_FILE</var> は上であなたが加えた、ローカライズしたプロパティファイルへの chrome パスです)。
  <pre>pref("extensions.EXTENSION_ID.description", "PATH_TO_LOCALIZATION_FILE");</pre>
 </li>
</ul>
<h4 id=".E3.83.AD.E3.83.BC.E3.82.AB.E3.83.A9.E3.82.A4.E3.82.BA.E5.8F.AF.E8.83.BD.E3.81.AA.E6.96.87.E5.AD.97.E5.88.97" name=".E3.83.AD.E3.83.BC.E3.82.AB.E3.83.A9.E3.82.A4.E3.82.BA.E5.8F.AF.E8.83.BD.E3.81.AA.E6.96.87.E5.AD.97.E5.88.97">ローカライズ可能な文字列</h4>
<p>この方法でローカライズできるアドオンのメタデータを列挙します。</p>
<ul>
 <li>name</li>
 <li>description</li>
 <li>creator</li>
 <li>homepageURL</li>
</ul>
<h4 id=".E3.83.AD.E3.83.BC.E3.82.AB.E3.83.A9.E3.82.A4.E3.82.BA.E5.8F.AF.E8.83.BD.E3.81.AA.E3.83.AA.E3.82.B9.E3.83.88" name=".E3.83.AD.E3.83.BC.E3.82.AB.E3.83.A9.E3.82.A4.E3.82.BA.E5.8F.AF.E8.83.BD.E3.81.AA.E3.83.AA.E3.82.B9.E3.83.88">ローカライズ可能なリスト</h4>
<p>複数の値が存在する場合、設定名の後ろに数字を付けます。</p>
<pre>extensions.EXTENSION_ID.contributor.1=FIRST_LOCALIZED_CONTRIBUTOR_NAME
extensions.EXTENSION_ID.contributor.2=SECOND_LOCALIZED_CONTRIBUTOR_NAME
extensions.EXTENSION_ID.contributor.3=THRID_LOCALIZED_CONTRIBUTOR_NAME

pref("extensions.EXTENSION_ID.contributor.1", "PATH_TO_LOCALIZATION_FILE");
pref("extensions.EXTENSION_ID.contributor.2", "PATH_TO_LOCALIZATION_FILE");
pref("extensions.EXTENSION_ID.contributor.3", "PATH_TO_LOCALIZATION_FILE");
</pre>
<p>この方法でローカライズできるアドオンのメタデータを列挙します。</p>
<ul>
 <li>developer</li>
 <li>translator</li>
 <li>contributor</li>
</ul>
