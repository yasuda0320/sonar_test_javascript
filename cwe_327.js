crypto.createCipheriv("AES-128-CBC", key, iv); // Noncompliant: CBC with PKCS5/7 (set by default) is vulnerable to oracle padding attacks
crypto.createCipheriv("AES-128-ECB", key, ""); // Noncompliant: ECB doesn't provide serious message confidentiality
