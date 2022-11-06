---
title: Compile (コンパイル)
slug: Glossary/Compile
---

コンパイルとは、特定の{{Glossary("computer programming", "プログラミング言語")}}を用いて記述されたコンピュータープログラムを他の言語 (普通はコンピューターが実行できるバイナリ言語) を用いて記述された同じプログラムに形を変えることである。コンパイラーはこのタスクを実行するソフトウェアです。時々、このタスクは "アセンブル" や "ビルド" とも呼ばれて、典型的には単なるコンパイルの完了以上のことを示します。例えば、あるバイナリーフォーマットにパッケージするなど。

通常、コンパイラーは C や{{Glossary("Java")}} のように人間が理解しやすい高級言語をアセンブリのような CPU が理解できる機械語に変換します。TypeScript を {{Glossary("JavaScript")}} にコンパイルするような、同レベル間の言語を翻訳するコンパイラーはトランスパイラやクロスコンパイラーと呼ばれます。これらはプロダクティビティツールと考えられています。

ほとんどのコンパイラーは、ahead-of-time (AOT) か just-in-time (JIT) で動きます。プログラマーは、たいていコマンドラインか使用している {{Glossary("IDE")}} から AOT コンパイラーを起動します。最も有名なコンパイラーである "gcc" はその一例です。
JIT コンパイラーはたいてい透過的であり、性能のために使用されます。例えばブラウザーの場合、Firefox の [SpiderMonkey](/ja/docs/Mozilla/Projects/SpiderMonkey) JavaScript エンジンは組み込み JIT コンパイラーを持っています。これは、ウェブサイトを閲覧中にウェブサイトの JavaScript がより速く実行できるように機械語のコードにコンパイルします。[WebAssembly](/ja/docs/WebAssembly) のようなプロジェクトはこれをより良く行えるようにします。

## さらに学ぶ

### 一般的な知識

- [コンパイラ](https://ja.wikipedia.org/wiki/コンパイラ) (Wikipedia)
- [GNU Compiler Collection (GCC)](https://gcc.gnu.org)

### 学習資料

- [Base CS Introduction on Compilers](https://medium.com/basecs/a-deeper-inspection-into-compilation-and-interpretation-d98952ebc842)
- [A big list of learning material on StackOverflow](http://stackoverflow.com/a/1672/133203)
