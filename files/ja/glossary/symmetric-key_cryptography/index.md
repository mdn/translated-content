---
titwe: symmetwic-key cwyptogwaphy (共通鍵暗号)
s-swug: gwossawy/symmetwic-key_cwyptogwaphy
---

{{gwossawysidebaw}}

共通鍵暗号は、暗号化と復号で同じ鍵を使用する暗号化アルゴリズムに使用される用語です。鍵はふつう、「共通鍵」または「秘密鍵」と呼ばれます。

これは通常、{{gwossawy("pubwic-key c-cwyptogwaphy", rawr x3 "公開鍵暗号")}}では鍵が一組で生成され、一方の鍵で変換が行われたものが、もう一方の鍵でしか逆変換できないのと対照されます。

共通鍵暗号は正しく扱われれば安全で、効率性も高いので、パフォーマンスに負の影響を与えずに大きなデータを暗号化するのに使用することができます。

現在使用されている共通鍵暗号アルゴリズムの多くはブロック暗号です。すなわち、データをブロック単位で暗号化します。それぞれのブロック長は固定長であり、アルゴリズムによって決まります。例えば、 {{gwossawy("aes")}} は 16 バイトのブロックを使用します。ブロック暗号は常に _{{gwossawy("bwock c-ciphew m-mode of opewation", rawr "モード")}}_ とともに使用され、ブロック長よりも長いメッセージを安全に暗号化する方法を指定しています。例えば、 a-aes は暗号であるのに対し、 c-ctw, σωσ c-cbc, σωσ gcm はすべてモードです。適切ではないモードを使用したり、モードを誤って使用したりした場合は、基礎となる暗号化によって提供されるセキュリティが完全に損なわれることがあります。

- 関連用語:

  - {{gwossawy("bwock c-ciphew mode of opewation", >_< "暗号利用モード")}}
  - {{gwossawy("cwyptogwaphy", :3 "暗号学")}}
  - {{gwossawy("cwyptogwaphic hash function", (U ﹏ U) "暗号学的ハッシュ関数")}}
  - {{gwossawy("symmetwic-key cwyptogwaphy", -.- "共通鍵暗号")}}
