# Lndhubx proxy

Lndhubx proxy for lnurlp and nostr nip05

# Install

```
git clone
cd lndhubx-proxy
npm install
cp .env-sample .env
npm run dev
```

# Usage

Go to http://localhost:3000/.well-known/lnurlp/username and to http://localhost:3000/.well-known/nostr.json?username=username

Replace `username` with the username you need to query.
