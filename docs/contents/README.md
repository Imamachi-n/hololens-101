# 概要
Hololens Academyで紹介されている内容について、自分自身が理解した内容などを書いていきます。

# トラブルシューティング
## WiFi経由でVisual StudioからHololensへアプリをデプロイする
HololensのデバイスポータルがONになっていることを確認し、Hololens側でPINコードを表示させておく。  
Visual Studio側でRelease、x86、リモートコンピュータを選択し、`デバックなしで開始`を実行する。  
すると、PINコードの入力を求められるので、Hololens側で生成したおいたPINコードを入力する。

## Hololensのデバイスポータルをリセットしたい
Hololens上で、以下のURLにアクセスする。
```
https://[HololensのIPアドレス]/devicepair.htm
```
PINコードが表示されるので、それをメモした後Bloomのジェスチャーを行う。  
上記で開いたページにPINコードの入力と、新しいユーザ・パスワードを求められる。

#### 参考
[https://forums.hololens.com/discussion/7728/windows-device-portal-username-password-reset](https://forums.hololens.com/discussion/7728/windows-device-portal-username-password-reset)

## Visual Studio上でアプリをデプロイができない
* DLLの一部が足りないなどのエラーが出た場合、ファイルパスが長すぎてデプロイができない可能性あり。プロジェクト名を短くしてデプロイし直す。

#### 参考
[https://github.com/VulcanTechnologies/HoloLensCameraStream/issues/31](https://github.com/VulcanTechnologies/HoloLensCameraStream/issues/31)