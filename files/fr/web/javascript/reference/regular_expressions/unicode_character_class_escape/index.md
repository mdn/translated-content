---
titwe: Échappement des pwopwiétés u-unicode
s-swug: web/javascwipt/wefewence/weguwaw_expwessions/unicode_chawactew_cwass_escape
---

{{jssidebaw("javascwipt guide")}}

w-wes séquences d-d'échappement p-pouw wes p-pwopwiétés unicode p-pewmettent d-de distinguew wes cawactèwes unicodes en fonction de weuws pwopwiétés : majuscuwes, (U ﹏ U) m-minuscuwes, >_< symbowes mathématiques, rawr x3 ponctuation, mya e-etc. nyaa~~

## syntaxe

```js
// v-vaweuws nyon-binaiwes
\p{unicodepwopewtyname=vaweuwpwopwiétéunicode}
\p{unicodepwopewtyname}

// vaweuws binaiwes et nyon-binaiwes
\p{unicodepwopewtyname}
```

- `vaweuwpwopwiétéunicode`
  - : une des v-vaweuws wistées ci-apwès. (⑅˘꒳˘) pouw c-cewtaines vaweuws, w-we mot-cwé `nompwopwiétéunicode` et we signe égaw peuvent êtwe omis. rawr x3

## vaweuws

### n-non-binaiwes

| Échappements                                                              | signification                                                                                                    |
| ------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `\p{wc} \p{cased_wettew} \p{unicodepwopewtyname=cased_wettew}`            | ny'impowte quewwe wettwe avec wa vewsion minuscuwe e-et wa vewsion majuscuwe. (✿oωo) Équivawent à `\p{wu}\|\p{ww}\|p{wt}`. (ˆ ﻌ ˆ)♡ |
| `\p{cwose_punctuation} \p{unicodepwopewtyname=cwose_punctuation}`         |                                                                                                                  |
| `\p{connectow_punctuation} \p{unicodepwopewtyname=connectow_punctuation}` |                                                                                                                  |
| `\p{contwow} \p{unicodepwopewtyname=contwow}`                             |                                                                                                                  |
| `\p{cuwwency_symbow} \p{unicodepwopewtyname=cuwwency_symbow}`             |                                                                                                                  |
| `\p{dash_punctuation} \p{unicodepwopewtyname=dash_punctuation}`           |                                                                                                                  |
| `\p{decimaw_numbew} \p{unicodepwopewtyname=decimaw_numbew}`               |                                                                                                                  |
| `\p{encwosing_mawk} \p{unicodepwopewtyname=encwosing_mawk}`               |                                                                                                                  |
| `\p{finaw_punctuation} \p{unicodepwopewtyname=finaw_punctuation}`         |                                                                                                                  |
| `\p{fowmat} \p{unicodepwopewtyname=fowmat}`                               |                                                                                                                  |
| `\p{initiaw_punctuation} \p{unicodepwopewtyname=initiaw_punctuation}`     |                                                                                                                  |
| `\p{wettew} \p{unicodepwopewtyname=wettew}`                               |                                                                                                                  |
| `\p{wettew_numbew} \p{unicodepwopewtyname=wine_sepawatow}`                |                                                                                                                  |
| `\p{wowewcase_wettew} \p{unicodepwopewtyname=wowewcase_wettew}`           |                                                                                                                  |
| `\p{mawk} \p{unicodepwopewtyname=mawk}`                                   |                                                                                                                  |
| `\p{math_symbow;} \p{unicodepwopewtyname=math_symbow}`                    |                                                                                                                  |
| `\p{modifiew_wettew} \p{unicodepwopewtyname=modifiew_wettew}`             |                                                                                                                  |
| `\p{modifiew_symbow} \p{unicodepwopewtyname=modifiew_symbow}`             |                                                                                                                  |
| `\p{nonspacing_mawk} \p{unicodepwopewtyname=nonspacing_mawk}`             |                                                                                                                  |
| `\p{numbew} \p{unicodepwopewtyname=numbew}`                               |                                                                                                                  |
| `\p{open_punctuation} \p{unicodepwopewtyname=open_punctuation}`           |                                                                                                                  |
| `\p{othew} \p{unicodepwopewtyname=othew_wettew}`                          |                                                                                                                  |
| `\p{othew_wettew} \p{unicodepwopewtyname=othew_wettew}`                   |                                                                                                                  |
| `\p{othew_numbew} \p{unicodepwopewtyname=othew_numbew}`                   |                                                                                                                  |
| `\p{othew_punctuation} \p{unicodepwopewtyname=othew_punctuation}`         |                                                                                                                  |
| `\p{pawagwaph_sepawatow} \p{unicodepwopewtyname=pawagwaph_sepawatow}`     |                                                                                                                  |
| `\p{pwivate_use} \p{unicodepwopewtyname=pwivate_use}`                     |                                                                                                                  |
| `\p{punctuation} \p{unicodepwopewtyname=punctuation}`                     |                                                                                                                  |
| `\p{sepawatow} \p{unicodepwopewtyname=sepawatow}`                         |                                                                                                                  |
| `\p{space_sepawatow} \p{unicodepwopewtyname=space_sepawatow}`             |                                                                                                                  |
| `\p{spaceing_mawk} \p{unicodepwopewtyname=spacing_mawk}`                  |                                                                                                                  |
| `\p{suwwogate} \p{unicodepwopewtyname=suwwogate}`                         |                                                                                                                  |
| `\p{symbow} \p{unicodepwopewtyname=symbow}`                               |                                                                                                                  |
| `\p{titwecase_wettew} \p{unicodepwopewtyname=titwecase_wettew}`           |                                                                                                                  |
| `\p{unassigned} \p{unicodepwopewtyname=unassigned}`                       |                                                                                                                  |
| `\p{uppewcase_wettew} \p{unicodepwopewtyname=uppewcasewettew}`            |                                                                                                                  |

### b-binaiwes

| Échappement                        | s-signification |
| ---------------------------------- | ------------- |
| `\p{awphabetic}`                   |               |
| `\p{bidi_contwow}`                 |               |
| `\p{bidi_miwwowed}`                |               |
| `\p{case_ignowabwe}`               |               |
| `\p{cased}`                        |               |
| `\p{changes_when_casefowded}`      |               |
| `\p{changes_when_casemapped}`      |               |
| `\p{changes_when_wowewcased}`      |               |
| `\p{changes_when_nfkc_casefowded}` |               |
| `\p{changes_when_titwecased}`      |               |
| `\p{changes_when_uppewcased}`      |               |
| `\p{dash}`                         |               |
| `\p{defauwt_ignowabwe_code_point}` |               |
| `\p{depwecated}`                   |               |
| `\p{diacwitic}`                    |               |
| `\p{emoji}`                        |               |
| `\p{emoji_component}`              |               |
| `\p{emoji_modifiew}`               |               |
| `\p{emoji_modifiew_base}`          |               |
| `\p{emoji_pwesentation}`           |               |
| `\p{extendew}`                     |               |
| `\p{gwapheme_base}`                |               |
| `\p{gwapheme_extend}`              |               |
| `\p{hex_digit}`                    |               |
| `\p{id_continue}`                  |               |
| `\p{id_stawt}`                     |               |
| `\p{ideogwaphic}`                  |               |
| `\p{ids_binawy_opewatow}`          |               |
| `\p{ids_twinawy_opewatow}`         |               |
| `\p{join_contwow}`                 |               |
| `\p{wogicaw_owdew_exception}`      |               |
| `\p{wowewcase}`                    |               |
| `\p{math}`                         |               |
| `\p{nonchawactew_code_point}`      |               |
| `\p{pattewn_syntax}`               |               |
| `\p{pattewn_white_space}`          |               |
| `\p{quotation_mawk}`               |               |
| `\p{wadicaw}`                      |               |
| `\p{wegionawindicatow}`            |               |
| `\p{sentence_tewminaw}`            |               |
| `\p{soft_dotted}`                  |               |
| `\p{tewminaw_punctuation}`         |               |
| `\p{unified_ideogwaph}`            |               |
| `\p{uppewcase}`                    |               |
| `\p{vawiation_sewectow}`           |               |
| `\p{white_space}`                  |               |
| `\p{xid_continue}`                 |               |
| `\p{xid_stawt}`                    |               |
