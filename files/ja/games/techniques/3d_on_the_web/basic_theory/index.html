---
title: 基本の 3D理論の説明
slug: Games/Techniques/3D_on_the_web/Basic_theory
tags:
  - 3D
  - Coordinates
  - Textures
  - basics
  - fragment
  - lighting
  - primitives
  - rendering
  - theory
  - vertex
  - vertices
translation_of: Games/Techniques/3D_on_the_web/Basic_theory
---
<div>{{GamesSidebar}}</div>

<p>本記事では 3D を始める人が知るべき基本的な理論について説明します。</p>

<h2 id="Coordinate_system" name="Coordinate_system">座標系</h2>

<p>3D とは一般的に 3D空間内で描写されているすべての形であり、それらの位置を計算するために座標系が使われています。</p>

<p><img alt="Coordinate system" src="https://mdn.mozillademos.org/files/13326/mdn-games-3d-coordinate-system.png" style="height: 338px; width: 600px;"></p>

<p>WebGL は右手系座標系を利用します - 上記の図のように <code>x</code> 軸は右方向へ、<code>y</code> 軸は上方向へ、<code>z</code> 軸はスクリーンの外の方向へ向かいます。</p>

<h2 id="Objects" name="Objects">オブジェクト</h2>

<p>さまざまな種類のオブジェクトは頂点を用いて構築されます。<strong>頂点</strong> は空間上の点であり、座標系における 3D の位置を持ち、たいていはいくつか追加で情報が定義されています。すべての頂点は次の属性を描写します:</p>

<ul>
 <li><strong>位置</strong>: 3D空間の位置を特定します(<code>x</code>, <code>y</code>, <code>z</code>)。</li>
 <li><strong>色</strong>: RGBA値を持ちます(R、G、B は赤、緑、青のチャンネルを、alpha は透過度を - すべての値の範囲は <code>0.0</code> から <code>1.0</code> までです)。</li>
 <li><strong>法線</strong>: 頂点の表面の方向を示す方法。</li>
 <li><strong>テクスチャ</strong>: 単色の代わりに頂点の表面を飾る 2D画像。</li>
</ul>

<p>この情報を用いて形状を構築することができます - 次は立方体の例です:</p>

<p><img alt="Cube" src="https://mdn.mozillademos.org/files/13324/mdn-games-3d-cube.png" style="height: 265px; width: 600px;"></p>

<p>形から定義される表面は頂点同士の表面となります。例えば、立方体は 8 つの異なる頂点(空間上の点)と 6 つの異なる表面を持ち、それぞれの表面が 4 つの頂点から構築されています。法線は表面がどの方向に向いているかを定義します。そしてまた、立方体の端で点が接続されています。形状は頂点と法線から構築され、また材質は色や画像のテクスチャになります。形状が材質と接続されている場合、メッシュを得ることができます。</p>

<h2 id="Rendering_pipeline" name="Rendering_pipeline">レンダリングパイプライン</h2>

<p>レンダリングパイプラインはスクリーン上に画像を準備し、スクリーン上に出力するためのプロセスです。画像のレンダリングパイプラインは 3D オブジェクトを <strong>頂点</strong> を用いて作図された <strong>単純なオブジェクト(プリミティブ)</strong> から作り、処理を加え、<strong>断片(フラグメント)</strong> を計算し、そして 2D のスクリーン上に <strong>ピクセル</strong> として出力します。</p>

<p><img alt="Rendering pipeline" src="https://mdn.mozillademos.org/files/13334/mdn-games-3d-rendering-pipeline.png" style="height: 225px; width: 600px;"></p>

<p>上記の図で使われる専門用語は以下の通りです:</p>

<ul>
 <li><strong>プリミティブ(Primitive)</strong>: パイプラインの入力 - これは頂点から構築され、三角形や点、ラインとなります。</li>
 <li><strong>断片(Fragment)</strong>: ピクセルを 3D に投影したもの、すべての属性はピクセルと同じ属性を持つ。</li>
 <li><strong>ピクセル(Pixel)</strong>: スクリーン上の二次元のグリッドに配置された点、それぞれ RGBA の色を持つ。</li>
</ul>

<p>頂点とフラグメントの処理はプログラミング可能です - あなたは <a href="/ja/docs/Games/Techniques/3D_on_the_web/GLSL_Shaders">自分自身でシェーダを書いて</a> 出力を操作することができます。</p>

<h2 id="Vertex_processing" name="Vertex_processing">頂点の処理</h2>

<p>頂点の処理は個々の座標の情報をつなげることでプレミティブを作成し、それらの座標を 3D空間のビューアで見られるように設定します。これは風景の写真を撮る準備に似ています - 最初にオブジェクトを配置し、カメラを設定し、そして撮影します。</p>

<p><img alt="Vertex processing" src="https://mdn.mozillademos.org/files/13336/mdn-games-3d-vertex-processing.png" style="height: 338px; width: 600px;"></p>

<p>この処理には４つの段階があります: 最初の処理はオブジェクトを配置するのに必要な処理で、これは <strong>model transformation(モデル変換)</strong> と呼ばれています。そして <strong>view transformation(視野変換)</strong> で 3D 空間上のカメラの位置の設定と向きを設定をします - 位置、方角、そして角度 - これは新しいシーンを作成したときに定義しなくてはなりません。</p>

<p><img alt="Camera" src="https://mdn.mozillademos.org/files/13322/mdn-games-3d-camera.png" style="height: 225px; width: 600px;"></p>

<p><strong>Projection transformation(投影変換)</strong> (または perspective transformation(透視変換) とも呼ばれます) はカメラの設定を定義します。これはカメラから何が見えるのかを設定します - 設定には <em>field of view(視野)</em>、<em>aspect ratio(アスペクト比)</em> そして任意の <em>近く(near)</em> と <em>遠くの平面(far planes)</em> を含みます。これらを学ぶには Three.js の <a href="/ja/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js#Camera">Camera paragraph</a> の記事を読んでください。</p>

<p><img alt="Camera settings" src="https://mdn.mozillademos.org/files/13320/mdn-games-3d-camera-settings.png" style="height: 338px; width: 600px;"></p>

<p>最後の処理は <strong>viewport transformation(ビューポート変換)</strong> で、レンダリングパイプラインの次の処理で出力に使うすべての処理を含みます。</p>

<h2 id="Rasterization" name="Rasterization">ラスタ化</h2>

<p>ラスタ化は(頂点で接続された)プリミティブを断片の集まりに変換します。</p>

<p><img alt="Rasterization" src="https://mdn.mozillademos.org/files/13332/mdn-games-3d-rasterization.png" style="height: 338px; width: 600px;"></p>

<p>それらの断片 - 3D 投影からなる 2D のピクセル - はピクセルのグリッドに整列されていて、最終的に出力統合の段階の間ピクセルとして 2D のスクリーン上に出力可能になります。</p>

<h2 id="Fragment_processing" name="Fragment_processing">断片処理</h2>

<p>断片処理はテクスチャと照明に焦点を当てます - これは与えられたパラメータを元に最終的な色を計算します。</p>

<p><img alt="Fragment processing" src="https://mdn.mozillademos.org/files/13328/mdn-games-3d-fragment-processing.png" style="height: 338px; width: 600px;"></p>

<h3 id="Textures" name="Textures">テクスチャ</h3>

<p>テクスチャは 3D 空間上でより見た目がよく、よりリアルなオブジェクトを作成するために使われる 2D 画像です。テクスチャは texels と呼ばれる単一テクスチャ要素から組み合わされており、texels は写真の要素と同様のピクセルの組み合わせです。レンダリングパイプラインの断片処理の段階でテクスチャをオブジェクトに追加することで必要によってオブジェクトを覆うよう調整したり、フィルターリングをすることができます。</p>

<p>テクスチャは 3D オブジェクトの間で繰り返し 2D画像を覆うことができます。テクスチャのフィルターリングは元の解像度またはテクスチャの画像が表示される断片と異なる場合に適用されます - これは結果的に縮小または拡大となります。</p>

<h3 id="Lighting" name="Lighting">照明</h3>

<p>私たちがスクリーン上で見る色は光とオブジェクトの素材自体の表面の色との相互作用の結果となります。光は吸収されるか、反射されるでしょう。WebGL で実装されている標準的な <strong>Phong Lighting Model</strong> には４つの光のタイプがあります:</p>

<ul>
 <li><strong>Diffuse</strong>: 太陽のような、遠くからの指向性のある光。</li>
 <li><strong>Specular</strong>: 部屋の中の電球や閃光のような、光のポイント。</li>
 <li><strong>Ambient</strong>: シーンにあるすべてに絶え間なく当てられる光。</li>
 <li><strong>Emissive</strong>: オブジェクトから直接発せられる光。</li>
</ul>

<h2 id="Output_merging" name="Output_merging">出力統合</h2>

<p>出力処理の段階の間で、スクリーンディスプレイ上に出力するために 3D空間上のすべてのプリミティブの断片を 2D グリッドのピクセルに変換する。</p>

<p><img alt="Output merging" src="https://mdn.mozillademos.org/files/13330/mdn-games-3d-output-merging.png" style="height: 338px; width: 600px;"></p>

<p>出力統合の間はいくつかの処理は必要のないものであれば無視されます - 例えばオブジェクトがスクリーンの外や他のオブジェクトの後ろにあったりすることでそれらは不可視であれば計算はされません。</p>

<ul>
</ul>

<h2 id="Conclusion" name="Conclusion">終わりに</h2>

<p>これで 3D の処理の基本的な背景を知ることができました。もし練習に進んだり、動作するデモを見たいのでえあれば、下のチュートリアルを引き続き調べてください:</p>

<ul>
 <li><a href="/ja/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js">Three.js でデモを作る</a></li>
 <li><a href="/ja/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js">Building up a basic demo with Babylon.js </a></li>
 <li><a href="/ja/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas">Building up a basic demo with Play​Canvas </a></li>
 <li><a href="/ja/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_A-Frame">A-Frame を使った基本的なデモの作成 </a></li>
</ul>

<p>さらに進んで、クールな最先端な 3D の試みをあなた自身で作ってください！</p>
