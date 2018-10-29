# 概要
# トラブルシューティング
## Hololensのデバイスポータルをリセットしたい
Hololens上で、以下のURLにアクセスする。
```
https://[HololensのIPアドレス]/devicepair.htm
```

#### 参考
[https://forums.hololens.com/discussion/7728/windows-device-portal-username-password-reset](https://forums.hololens.com/discussion/7728/windows-device-portal-username-password-reset)

## デプロイができない
* DLLの一部が足りないなどのエラーが出た場合、ファイルパスが長すぎてデプロイができない可能性あり。プロジェクト名を短くしてデプロイし直す。

#### 参考
[https://github.com/VulcanTechnologies/HoloLensCameraStream/issues/31](https://github.com/VulcanTechnologies/HoloLensCameraStream/issues/31)