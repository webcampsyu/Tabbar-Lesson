/*$()関数では特定の属性を持つ要素や属性値を絞り込むことが出来る
  特定の属性を持つ要素のみを取得したい場合
  $('要素[属性]')
  属性値が特定の値に等しい要素だけを取得したい場合
  $('要素[属性 = "値"]')
  属性値が特定の値に等しくない要素だけを取得したい場合
  $('要素[属性 != "値"]')
*/
$('#tab-contents .tab[id != "tab1"]').hide(); /*.hide();は特定のHTML要素を非表示にするメソッド
                                                 id="tab-contents"の要素のうち
                                                 class="tab"であり、id="tab1"ではない
                                                 要素が非表示になる*/

$('#tab-menu a').on('click', function(event) {
  //イベント発生時に行われる処理
  //ここではid="tab-menu"のaタグがクリックされたときに処理を実行してください
  $("#tab-contents .tab").hide(); /*id="tab-contents"内のいずれかのタブがクリック
                                    されたときにそのタブ内の全コンテンツを非表示にしている*/
  $("#tab-menu .active").removeClass("active"); /*.removeClass()はクラス属性が設定されている
                                                  HTML要素からクラスを削除するメソッド
                                                  ここではactiveが削除対象のクラスとして指定
                                                  cssで#tab-menu .activeの設定でタブのクラスがactiveの時
                                                  背景色が白色/文字色が黒色になる設定をしている
                                                  タブを切り替えるときはこのcss乗せっても削除しなければならない
                                                  そのため、removeClass()にactiveクラスを指定*/
  $(this).addClass("active"); /*.addClass()は任意のHTML要素にクラス属性を追加できるメソッド
                                どのときにactiveクラスが追加されるかというと
                                $(this)の時、つまりタブがクリックされたとき*/
  $($(this).attr("href")).show(); /*attr()はHTML要素の属性を取得したり設定できるメソッド
                                    ここではhref属性を取得するように指定
                                    show()は要素を表示するメソッド
                                    $(this)の時、つまりタブがクリックされたときに
                                    表示される*/
  event.preventDefault();
});