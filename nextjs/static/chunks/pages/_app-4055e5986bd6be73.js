(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{2191:function(e,t,i){"use strict";i.d(t,{$:function(){return th},A:function(){return h},B:function(){return d},G:function(){return eE},H:function(){return eA},J:function(){return eV},L:function(){return er},M:function(){return eK},N:function(){return eZ},P:function(){return iA},Q:function(){return eQ},R:function(){return i_},T:function(){return e0},U:function(){return eY},V:function(){return e2},W:function(){return e3},X:function(){return e9},Y:function(){return to},Z:function(){return ta},_:function(){return tl},a:function(){return tZ},a0:function(){return tp},a1:function(){return tg},a2:function(){return tm},a3:function(){return tv},a4:function(){return ty},a5:function(){return t_},a6:function(){return tw},a7:function(){return tI},a8:function(){return tb},a9:function(){return tE},aA:function(){return es},aB:function(){return iQ},aC:function(){return iH},aD:function(){return iB},aE:function(){return eI},aI:function(){return t0},aL:function(){return e1},aa:function(){return tk},ab:function(){return tA},ac:function(){return tS},af:function(){return tC},ag:function(){return tO},ah:function(){return tN},ak:function(){return tt},al:function(){return tj},an:function(){return tH},ao:function(){return tq},ap:function(){return E},aq:function(){return eg},ar:function(){return ed},as:function(){return m},at:function(){return na},au:function(){return i4},av:function(){return em},aw:function(){return v},ax:function(){return I},ay:function(){return i1},az:function(){return k},b:function(){return tX},c:function(){return iD},d:function(){return iU},e:function(){return iM},f:function(){return iq},g:function(){return iX},h:function(){return iK},i:function(){return io},j:function(){return iZ},k:function(){return nu},l:function(){return ib},m:function(){return nd},n:function(){return n_},o:function(){return u},r:function(){return iE},s:function(){return iI},u:function(){return ik},v:function(){return tV}});var n,r=i(4444),s=i(5816),o=i(3333);function a(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)0>t.indexOf(n[r])&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(i[n[r]]=e[n[r]]);return i}var l=i(8463);let u={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},h={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};function c(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}let d=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}},f=new r.LL("auth","Firebase",c()),p=new o.Yd("@firebase/auth");function g(e,...t){p.logLevel<=o.in.ERROR&&p.error(`Auth (${s.SDK_VERSION}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m(e,...t){throw w(e,...t)}function v(e,...t){return w(e,...t)}function y(e,t,i){let n=Object.assign(Object.assign({},c()),{[t]:i}),s=new r.LL("auth","Firebase",n);return s.create(t,{appName:e.name})}function _(e,t,i){if(!(t instanceof i))throw i.name!==t.constructor.name&&m(e,"argument-error"),y(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function w(e,...t){if("string"!=typeof e){let i=t[0],n=[...t.slice(1)];return n[0]&&(n[0].appName=e.name),e._errorFactory.create(i,...n)}return f.create(e,...t)}function I(e,t,...i){if(!e)throw w(t,...i)}function b(e){let t="INTERNAL ASSERTION FAILED: "+e;throw g(t),Error(t)}function E(e,t){e||b(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let T=new Map;function k(e){E(e instanceof Function,"Expected a class definition");let t=T.get(e);return t?(E(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,T.set(e,t),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function S(){return"http:"===R()||"https:"===R()}function R(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(e,t){this.shortDelay=e,this.longDelay=t,E(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,r.uI)()||(0,r.b$)()}get(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(S()||(0,r.ru)()||"connection"in navigator))||navigator.onLine?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(e,t){E(e.emulator,"Emulator should always be set here");let{url:i}=e.emulator;return t?`${i}${t.startsWith("/")?t.slice(1):t}`:i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void b("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void b("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void b("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let P={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},L=new C(3e4,6e4);function D(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function M(e,t,i,n,s={}){return U(e,s,async()=>{let s={},o={};n&&("GET"===t?o=n:s={body:JSON.stringify(n)});let a=(0,r.xO)(Object.assign({key:e.config.apiKey},o)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),N.fetch()(F(e,e.config.apiHost,i,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},s))})}async function U(e,t,i){e._canInitEmulator=!1;let n=Object.assign(Object.assign({},P),t);try{let t=new j(e),r=await Promise.race([i(),t.promise]);t.clearNetworkTimeout();let s=await r.json();if("needConfirmation"in s)throw V(e,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{let t=r.ok?s.errorMessage:s.error.message,[i,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===i)throw V(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===i)throw V(e,"email-already-in-use",s);if("USER_DISABLED"===i)throw V(e,"user-disabled",s);let a=n[i]||i.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw y(e,a,o);m(e,a)}}catch(t){if(t instanceof r.ZR)throw t;m(e,"network-request-failed")}}async function x(e,t,i,n,r={}){let s=await M(e,t,i,n,r);return"mfaPendingCredential"in s&&m(e,"multi-factor-auth-required",{_serverResponse:s}),s}function F(e,t,i,n){let r=`${t}${i}?${n}`;return e.config.emulator?O(e.config,r):`${e.config.apiScheme}://${r}`}class j{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(v(this.auth,"network-request-failed")),L.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function V(e,t,i){let n={appName:e.name};i.email&&(n.email=i.email),i.phoneNumber&&(n.phoneNumber=i.phoneNumber);let r=v(e,t,n);return r.customData._tokenResponse=i,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z(e,t){return M(e,"POST","/v1/accounts:delete",t)}async function B(e,t){return M(e,"POST","/v1/accounts:update",t)}async function H(e,t){return M(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W(e){if(e)try{let t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}async function $(e,t=!1){let i=(0,r.m9)(e),n=await i.getIdToken(t),s=G(n);I(s&&s.exp&&s.auth_time&&s.iat,i.auth,"internal-error");let o="object"==typeof s.firebase?s.firebase:void 0,a=null==o?void 0:o.sign_in_provider;return{claims:s,token:n,authTime:W(q(s.auth_time)),issuedAtTime:W(q(s.iat)),expirationTime:W(q(s.exp)),signInProvider:a||null,signInSecondFactor:(null==o?void 0:o.sign_in_second_factor)||null}}function q(e){return 1e3*Number(e)}function G(e){let[t,i,n]=e.split(".");if(void 0===t||void 0===i||void 0===n)return g("JWT malformed, contained fewer than 3 sections"),null;try{let e=(0,r.tV)(i);if(!e)return g("Failed to decode base64 JWT payload"),null;return JSON.parse(e)}catch(e){return g("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K(e,t,i=!1){if(i)return t;try{return await t}catch(t){throw t instanceof r.ZR&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){let e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;let e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,i=e-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;let t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(null==e?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=W(this.lastLoginAt),this.creationTime=W(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y(e){var t;let i=e.auth,n=await e.getIdToken(),r=await K(e,H(i,{idToken:n}));I(null==r?void 0:r.users.length,i,"internal-error");let s=r.users[0];e._notifyReloadListener(s);let o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map(e=>{var{providerId:t}=e,i=a(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}}):[],l=function(e,t){let i=e.filter(e=>!t.some(t=>t.providerId===e.providerId));return[...i,...t]}(e.providerData,o),u=e.isAnonymous,h=!(e.email&&s.passwordHash)&&!(null==l?void 0:l.length),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new X(s.createdAt,s.lastLoginAt),isAnonymous:!!u&&h};Object.assign(e,c)}async function Z(e){let t=(0,r.m9)(e);await Y(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q(e,t){let i=await U(e,{},async()=>{let i=(0,r.xO)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:n,apiKey:s}=e.config,o=F(e,n,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",N.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){I(e.idToken,"internal-error"),I(void 0!==e.idToken,"internal-error"),I(void 0!==e.refreshToken,"internal-error");let t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){let t=G(e);return I(t,"internal-error"),I(void 0!==t.exp,"internal-error"),I(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return(I(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired)?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){let{accessToken:i,refreshToken:n,expiresIn:r}=await Q(e,t);this.updateTokensAndExpiration(i,n,Number(r))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*i}static fromJSON(e,t){let{refreshToken:i,accessToken:n,expirationTime:r}=t,s=new ee;return i&&(I("string"==typeof i,"internal-error",{appName:e}),s.refreshToken=i),n&&(I("string"==typeof n,"internal-error",{appName:e}),s.accessToken=n),r&&(I("number"==typeof r,"internal-error",{appName:e}),s.expirationTime=r),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ee,this.toJSON())}_performRefresh(){return b("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(e,t){I("string"==typeof e||void 0===e,"internal-error",{appName:t})}class ei{constructor(e){var{uid:t,auth:i,stsTokenManager:n}=e,r=a(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new J(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new X(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){let t=await K(this,this.stsTokenManager.getToken(this.auth,e));return I(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return $(this,e)}reload(){return Z(this)}_assign(e){this!==e&&(I(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new ei(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){I(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Y(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){let e=await this.getIdToken();return await K(this,z(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,n,r,s,o,a,l,u;let h=null!==(i=t.displayName)&&void 0!==i?i:void 0,c=null!==(n=t.email)&&void 0!==n?n:void 0,d=null!==(r=t.phoneNumber)&&void 0!==r?r:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(l=t.createdAt)&&void 0!==l?l:void 0,v=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:y,emailVerified:_,isAnonymous:w,providerData:b,stsTokenManager:E}=t;I(y&&E,e,"internal-error");let T=ee.fromJSON(this.name,E);I("string"==typeof y,e,"internal-error"),et(h,e.name),et(c,e.name),I("boolean"==typeof _,e,"internal-error"),I("boolean"==typeof w,e,"internal-error"),et(d,e.name),et(f,e.name),et(p,e.name),et(g,e.name),et(m,e.name),et(v,e.name);let k=new ei({uid:y,auth:e,email:c,emailVerified:_,displayName:h,isAnonymous:w,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:T,createdAt:m,lastLoginAt:v});return b&&Array.isArray(b)&&(k.providerData=b.map(e=>Object.assign({},e))),g&&(k._redirectEventId=g),k}static async _fromIdTokenResponse(e,t,i=!1){let n=new ee;n.updateFromServerResponse(t);let r=new ei({uid:t.localId,auth:e,stsTokenManager:n,isAnonymous:i});return await Y(r),r}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){let t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}en.type="NONE";let er=en;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function es(e,t,i){return`firebase:${e}:${t}:${i}`}class eo{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;let{config:n,name:r}=this.auth;this.fullUserKey=es(this.userKey,n.apiKey,r),this.fullPersistenceKey=es("persistence",n.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){let e=await this.persistence._get(this.fullUserKey);return e?ei._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;let t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new eo(k(er),e,i);let n=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e),r=n[0]||k(er),s=es(i,e.config.apiKey,e.name),o=null;for(let i of t)try{let t=await i._get(s);if(t){let n=ei._fromJSON(e,t);i!==r&&(o=n),r=i;break}}catch(e){}let a=n.filter(e=>e._shouldAllowMigration);return r._shouldAllowMigration&&a.length&&(r=a[0],o&&await r._set(s,o.toJSON()),await Promise.all(t.map(async e=>{if(e!==r)try{await e._remove(s)}catch(e){}}))),new eo(r,e,i)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ea(e){let t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(ec(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";{if(t.includes("edge/"))return"Edge";if(el(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ef(t))return"Blackberry";if(ep(t))return"Webos";if(eu(t))return"Safari";if((t.includes("chrome/")||eh(t))&&!t.includes("edge/"))return"Chrome";if(ed(t))return"Android";let i=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);if((null==i?void 0:i.length)===2)return i[1]}return"Other"}function el(e=(0,r.z$)()){return/firefox\//i.test(e)}function eu(e=(0,r.z$)()){let t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function eh(e=(0,r.z$)()){return/crios\//i.test(e)}function ec(e=(0,r.z$)()){return/iemobile/i.test(e)}function ed(e=(0,r.z$)()){return/android/i.test(e)}function ef(e=(0,r.z$)()){return/blackberry/i.test(e)}function ep(e=(0,r.z$)()){return/webos/i.test(e)}function eg(e=(0,r.z$)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function em(e=(0,r.z$)()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(e)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(e)}function ev(e=(0,r.z$)()){return eg(e)||ed(e)||ep(e)||ef(e)||/windows phone/i.test(e)||ec(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ey(e,t=[]){let i;switch(e){case"Browser":i=ea((0,r.z$)());break;case"Worker":i=`${ea((0,r.z$)())}-${e}`;break;default:i=e}let n=t.length?t.join(","):"FirebaseCore-web";return`${i}/JsCore/${s.SDK_VERSION}/${n}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){let i=t=>new Promise((i,n)=>{try{let n=e(t);i(n)}catch(e){n(e)}});i.onAbort=t,this.queue.push(i);let n=this.queue.length-1;return()=>{this.queue[n]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;let t=[];try{for(let i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(e){for(let e of(t.reverse(),t))try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ew{constructor(e,t,i){this.app=e,this.heartbeatServiceProvider=t,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new eb(this),this.idTokenSubscription=new eb(this),this.beforeStateQueue=new e_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=f,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=k(t)),this._initializationPromise=this.queue(async()=>{var i,n;if(!this._deleted&&(this.persistenceManager=await eo.create(this,e),!this._deleted)){if(null===(i=this._popupRedirectResolver)||void 0===i?void 0:i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(n=this.currentUser)||void 0===n?void 0:n.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;let e=await this.assertedPersistence.getCurrentUser();if(this.currentUser||e){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;let i=await this.assertedPersistence.getCurrentUser(),n=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let i=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==n?void 0:n._redirectEventId,o=await this.tryRedirectSignIn(e);(!i||i===s)&&(null==o?void 0:o.user)&&(n=o.user,r=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(n)}catch(e){n=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(e))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return(I(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId)?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Y(e)}catch(e){if((null==e?void 0:e.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;let e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){let t=e?(0,r.m9)(e):null;return t&&I(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&I(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(k(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new r.LL("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){let i=await this.getOrInitRedirectPersistenceManager(t);return null===e?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){let t=e&&k(e)||this._popupRedirectResolver;I(t,this,"argument-error"),this.redirectPersistenceManager=await eo.create(this,[k(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return(this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e)?this._currentUser:(null===(i=this.redirectUser)||void 0===i?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let i=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,n){if(this._deleted)return()=>{};let r="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return(I(s,this,"internal-error"),s.then(()=>r(this.currentUser)),"function"==typeof t)?e.addObserver(t,i,n):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return I(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ey(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;let t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);let i=await (null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return i&&(t["X-Firebase-Client"]=i),t}}function eI(e){return(0,r.m9)(e)}class eb{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,r.ne)(e=>this.observer=e)}get next(){return I(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function eE(e,t,i){let n=eI(e);I(n._canInitEmulator,n,"emulator-config-failed"),I(/^https?:\/\//.test(t),n,"invalid-emulator-scheme");let r=!!(null==i?void 0:i.disableWarnings),s=eT(t),{host:o,port:a}=function(e){let t=eT(e),i=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!i)return{host:"",port:null};let n=i[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(n);if(r){let e=r[1];return{host:e,port:ek(n.substr(e.length+1))}}{let[e,t]=n.split(":");return{host:e,port:ek(t)}}}(t),l=null===a?"":`:${a}`;n.config.emulator={url:`${s}//${o}${l}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||function(){function e(){let e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}()}function eT(e){let t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function ek(e){if(!e)return null;let t=Number(e);return isNaN(t)?null:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eA{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return b("not implemented")}_getIdTokenResponse(e){return b("not implemented")}_linkToIdToken(e,t){return b("not implemented")}_getReauthenticationResolver(e){return b("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eS(e,t){return M(e,"POST","/v1/accounts:resetPassword",D(e,t))}async function eR(e,t){return M(e,"POST","/v1/accounts:update",t)}async function eC(e,t){return M(e,"POST","/v1/accounts:update",D(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eO(e,t){return x(e,"POST","/v1/accounts:signInWithPassword",D(e,t))}async function eN(e,t){return M(e,"POST","/v1/accounts:sendOobCode",D(e,t))}async function eP(e,t){return eN(e,t)}async function eL(e,t){return eN(e,t)}async function eD(e,t){return eN(e,t)}async function eM(e,t){return eN(e,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eU(e,t){return x(e,"POST","/v1/accounts:signInWithEmailLink",D(e,t))}async function ex(e,t){return x(e,"POST","/v1/accounts:signInWithEmailLink",D(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eF extends eA{constructor(e,t,i,n=null){super("password",i),this._email=e,this._password=t,this._tenantId=n}static _fromEmailAndPassword(e,t){return new eF(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new eF(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return eO(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return eU(e,{email:this._email,oobCode:this._password});default:m(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return eR(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return ex(e,{idToken:t,email:this._email,oobCode:this._password});default:m(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ej(e,t){return x(e,"POST","/v1/accounts:signInWithIdp",D(e,t))}class eV extends eA{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){let t=new eV(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):m("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e,{providerId:i,signInMethod:n}=t,r=a(t,["providerId","signInMethod"]);if(!i||!n)return null;let s=new eV(i,n);return s.idToken=r.idToken||void 0,s.accessToken=r.accessToken||void 0,s.secret=r.secret,s.nonce=r.nonce,s.pendingToken=r.pendingToken||null,s}_getIdTokenResponse(e){let t=this.buildRequest();return ej(e,t)}_linkToIdToken(e,t){let i=this.buildRequest();return i.idToken=t,ej(e,i)}_getReauthenticationResolver(e){let t=this.buildRequest();return t.autoCreate=!1,ej(e,t)}buildRequest(){let e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{let t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=(0,r.xO)(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ez(e,t){return M(e,"POST","/v1/accounts:sendVerificationCode",D(e,t))}async function eB(e,t){return x(e,"POST","/v1/accounts:signInWithPhoneNumber",D(e,t))}async function eH(e,t){let i=await x(e,"POST","/v1/accounts:signInWithPhoneNumber",D(e,t));if(i.temporaryProof)throw V(e,"account-exists-with-different-credential",i);return i}let eW={USER_NOT_FOUND:"user-not-found"};async function e$(e,t){let i=Object.assign(Object.assign({},t),{operation:"REAUTH"});return x(e,"POST","/v1/accounts:signInWithPhoneNumber",D(e,i),eW)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eq extends eA{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new eq({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new eq({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return eB(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return eH(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return e$(e,this._makeVerificationRequest())}_makeVerificationRequest(){let{temporaryProof:e,phoneNumber:t,verificationId:i,verificationCode:n}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:i,code:n}}toJSON(){let e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));let{verificationId:t,verificationCode:i,phoneNumber:n,temporaryProof:r}=e;return i||t||n||r?new eq({verificationId:t,verificationCode:i,phoneNumber:n,temporaryProof:r}):null}}class eG{constructor(e){var t,i,n,s,o,a;let l=(0,r.zd)((0,r.pd)(e)),u=null!==(t=l.apiKey)&&void 0!==t?t:null,h=null!==(i=l.oobCode)&&void 0!==i?i:null,c=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(n=l.mode)&&void 0!==n?n:null);I(u&&h&&c,"argument-error"),this.apiKey=u,this.operation=c,this.code=h,this.continueUrl=null!==(s=l.continueUrl)&&void 0!==s?s:null,this.languageCode=null!==(o=l.languageCode)&&void 0!==o?o:null,this.tenantId=null!==(a=l.tenantId)&&void 0!==a?a:null}static parseLink(e){let t=function(e){let t=(0,r.zd)((0,r.pd)(e)).link,i=t?(0,r.zd)((0,r.pd)(t)).deep_link_id:null,n=(0,r.zd)((0,r.pd)(e)).deep_link_id,s=n?(0,r.zd)((0,r.pd)(n)).link:null;return s||n||i||t||e}(e);try{return new eG(t)}catch(e){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eK{constructor(){this.providerId=eK.PROVIDER_ID}static credential(e,t){return eF._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){let i=eG.parseLink(t);return I(i,"argument-error"),eF._fromEmailAndCode(e,i.code,i.tenantId)}}eK.PROVIDER_ID="password",eK.EMAIL_PASSWORD_SIGN_IN_METHOD="password",eK.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eJ{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eX extends eJ{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class eY extends eX{static credentialFromJSON(e){let t="string"==typeof e?JSON.parse(e):e;return I("providerId"in t&&"signInMethod"in t,"argument-error"),eV._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return I(e.idToken||e.accessToken,"argument-error"),eV._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return eY.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return eY.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthIdToken:t,oauthAccessToken:i,oauthTokenSecret:n,pendingToken:r,nonce:s,providerId:o}=e;if(!i&&!n&&!t&&!r||!o)return null;try{return new eY(o)._credential({idToken:t,accessToken:i,nonce:s,pendingToken:r})}catch(e){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eZ extends eX{constructor(){super("facebook.com")}static credential(e){return eV._fromParams({providerId:eZ.PROVIDER_ID,signInMethod:eZ.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return eZ.credentialFromTaggedObject(e)}static credentialFromError(e){return eZ.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return eZ.credential(e.oauthAccessToken)}catch(e){return null}}}eZ.FACEBOOK_SIGN_IN_METHOD="facebook.com",eZ.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eQ extends eX{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return eV._fromParams({providerId:eQ.PROVIDER_ID,signInMethod:eQ.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return eQ.credentialFromTaggedObject(e)}static credentialFromError(e){return eQ.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return eQ.credential(t,i)}catch(e){return null}}}eQ.GOOGLE_SIGN_IN_METHOD="google.com",eQ.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e0 extends eX{constructor(){super("github.com")}static credential(e){return eV._fromParams({providerId:e0.PROVIDER_ID,signInMethod:e0.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return e0.credentialFromTaggedObject(e)}static credentialFromError(e){return e0.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return e0.credential(e.oauthAccessToken)}catch(e){return null}}}e0.GITHUB_SIGN_IN_METHOD="github.com",e0.PROVIDER_ID="github.com";class e1 extends eA{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){let t=this.buildRequest();return ej(e,t)}_linkToIdToken(e,t){let i=this.buildRequest();return i.idToken=t,ej(e,i)}_getReauthenticationResolver(e){let t=this.buildRequest();return t.autoCreate=!1,ej(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e,{providerId:i,signInMethod:n,pendingToken:r}=t;return i&&n&&r&&i===n?new e1(i,r):null}static _create(e,t){return new e1(e,t)}buildRequest(){return{requestUri:"http://localhost",returnSecureToken:!0,pendingToken:this.pendingToken}}}class e2 extends eJ{constructor(e){I(e.startsWith("saml."),"argument-error"),super(e)}static credentialFromResult(e){return e2.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return e2.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){let t=e1.fromJSON(e);return I(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{pendingToken:t,providerId:i}=e;if(!t||!i)return null;try{return e1._create(i,t)}catch(e){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e3 extends eX{constructor(){super("twitter.com")}static credential(e,t){return eV._fromParams({providerId:e3.PROVIDER_ID,signInMethod:e3.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return e3.credentialFromTaggedObject(e)}static credentialFromError(e){return e3.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return e3.credential(t,i)}catch(e){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e4(e,t){return x(e,"POST","/v1/accounts:signUp",D(e,t))}e3.TWITTER_SIGN_IN_METHOD="twitter.com",e3.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e6{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,n=!1){let r=await ei._fromIdTokenResponse(e,i,n),s=e5(i),o=new e6({user:r,providerId:s,_tokenResponse:i,operationType:t});return o}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);let n=e5(i);return new e6({user:e,providerId:n,_tokenResponse:i,operationType:t})}}function e5(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e9(e){var t;let i=eI(e);if(await i._initializationPromise,null===(t=i.currentUser)||void 0===t?void 0:t.isAnonymous)return new e6({user:i.currentUser,providerId:null,operationType:"signIn"});let n=await e4(i,{returnSecureToken:!0}),r=await e6._fromIdTokenResponse(i,"signIn",n,!0);return await i._updateCurrentUser(r.user),r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e8 extends r.ZR{constructor(e,t,i,n){var r;super(t.code,t.message),this.operationType=i,this.user=n,Object.setPrototypeOf(this,e8.prototype),this.customData={appName:e.name,tenantId:null!==(r=e.tenantId)&&void 0!==r?r:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,n){return new e8(e,t,i,n)}}function e7(e,t,i,n){let r="reauthenticate"===t?i._getReauthenticationResolver(e):i._getIdTokenResponse(e);return r.catch(i=>{if("auth/multi-factor-auth-required"===i.code)throw e8._fromErrorAndOperation(e,i,t,n);throw i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function te(e){return new Set(e.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tt(e,t){let i=(0,r.m9)(e);await tn(!0,i,t);let{providerUserInfo:n}=await B(i.auth,{idToken:await i.getIdToken(),deleteProvider:[t]}),s=te(n||[]);return i.providerData=i.providerData.filter(e=>s.has(e.providerId)),s.has("phone")||(i.phoneNumber=null),await i.auth._persistUserIfCurrent(i),i}async function ti(e,t,i=!1){let n=await K(e,t._linkToIdToken(e.auth,await e.getIdToken()),i);return e6._forOperation(e,"link",n)}async function tn(e,t,i){await Y(t);let n=te(t.providerData);I(n.has(i)===e,t.auth,!1===e?"provider-already-linked":"no-such-provider")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tr(e,t,i=!1){let{auth:n}=e,r="reauthenticate";try{let s=await K(e,e7(n,r,t,e),i);I(s.idToken,n,"internal-error");let o=G(s.idToken);I(o,n,"internal-error");let{sub:a}=o;return I(e.uid===a,n,"user-mismatch"),e6._forOperation(e,r,s)}catch(e){throw(null==e?void 0:e.code)==="auth/user-not-found"&&m(n,"user-mismatch"),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ts(e,t,i=!1){let n="signIn",r=await e7(e,n,t),s=await e6._fromIdTokenResponse(e,n,r);return i||await e._updateCurrentUser(s.user),s}async function to(e,t){return ts(eI(e),t)}async function ta(e,t){let i=(0,r.m9)(e);return await tn(!1,i,t.providerId),ti(i,t)}async function tl(e,t){return tr((0,r.m9)(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tu(e,t){return x(e,"POST","/v1/accounts:signInWithCustomToken",D(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function th(e,t){let i=eI(e),n=await tu(i,{token:t,returnSecureToken:!0}),r=await e6._fromIdTokenResponse(i,"signIn",n);return await i._updateCurrentUser(r.user),r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?td._fromServerResponse(e,t):m(e,"internal-error")}}class td extends tc{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new td(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tf(e,t,i){var n;I((null===(n=i.url)||void 0===n?void 0:n.length)>0,e,"invalid-continue-uri"),I(void 0===i.dynamicLinkDomain||i.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=i.url,t.dynamicLinkDomain=i.dynamicLinkDomain,t.canHandleCodeInApp=i.handleCodeInApp,i.iOS&&(I(i.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=i.iOS.bundleId),i.android&&(I(i.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=i.android.installApp,t.androidMinimumVersionCode=i.android.minimumVersion,t.androidPackageName=i.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tp(e,t,i){let n=(0,r.m9)(e),s={requestType:"PASSWORD_RESET",email:t};i&&tf(n,s,i),await eL(n,s)}async function tg(e,t,i){await eS((0,r.m9)(e),{oobCode:t,newPassword:i})}async function tm(e,t){await eC((0,r.m9)(e),{oobCode:t})}async function tv(e,t){let i=(0,r.m9)(e),n=await eS(i,{oobCode:t}),s=n.requestType;switch(I(s,i,"internal-error"),s){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":I(n.newEmail,i,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":I(n.mfaInfo,i,"internal-error");default:I(n.email,i,"internal-error")}let o=null;return n.mfaInfo&&(o=tc._fromServerResponse(eI(i),n.mfaInfo)),{data:{email:("VERIFY_AND_CHANGE_EMAIL"===n.requestType?n.newEmail:n.email)||null,previousEmail:("VERIFY_AND_CHANGE_EMAIL"===n.requestType?n.email:n.newEmail)||null,multiFactorInfo:o},operation:s}}async function ty(e,t){let{data:i}=await tv((0,r.m9)(e),t);return i.email}async function t_(e,t,i){let n=eI(e),r=await e4(n,{returnSecureToken:!0,email:t,password:i}),s=await e6._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(s.user),s}function tw(e,t,i){return to((0,r.m9)(e),eK.credential(t,i))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tI(e,t,i){let n=(0,r.m9)(e),s={requestType:"EMAIL_SIGNIN",email:t};I(i.handleCodeInApp,n,"argument-error"),i&&tf(n,s,i),await eD(n,s)}function tb(e,t){let i=eG.parseLink(t);return(null==i?void 0:i.operation)==="EMAIL_SIGNIN"}async function tE(e,t,i){let n=(0,r.m9)(e),s=eK.credentialWithLink(t,i||A());return I(s._tenantId===(n.tenantId||null),n,"tenant-id-mismatch"),to(n,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tT(e,t){return M(e,"POST","/v1/accounts:createAuthUri",D(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tk(e,t){let i=S()?A():"http://localhost",{signinMethods:n}=await tT((0,r.m9)(e),{identifier:t,continueUri:i});return n||[]}async function tA(e,t){let i=(0,r.m9)(e),n=await e.getIdToken(),s={requestType:"VERIFY_EMAIL",idToken:n};t&&tf(i.auth,s,t);let{email:o}=await eP(i.auth,s);o!==e.email&&await e.reload()}async function tS(e,t,i){let n=(0,r.m9)(e),s=await e.getIdToken(),o={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:s,newEmail:t};i&&tf(n.auth,o,i);let{email:a}=await eM(n.auth,o);a!==e.email&&await e.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tR(e,t){return M(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tC(e,{displayName:t,photoURL:i}){if(void 0===t&&void 0===i)return;let n=(0,r.m9)(e),s=await n.getIdToken(),o=await K(n,tR(n.auth,{idToken:s,displayName:t,photoUrl:i,returnSecureToken:!0}));n.displayName=o.displayName||null,n.photoURL=o.photoUrl||null;let a=n.providerData.find(({providerId:e})=>"password"===e);a&&(a.displayName=n.displayName,a.photoURL=n.photoURL),await n._updateTokensIfNecessary(o)}function tO(e,t){return tP((0,r.m9)(e),t,null)}function tN(e,t){return tP((0,r.m9)(e),null,t)}async function tP(e,t,i){let{auth:n}=e,r=await e.getIdToken(),s={idToken:r,returnSecureToken:!0};t&&(s.email=t),i&&(s.password=i);let o=await K(e,eR(n,s));await e._updateTokensIfNecessary(o,!0)}class tL{constructor(e,t,i={}){this.isNewUser=e,this.providerId=t,this.profile=i}}class tD extends tL{constructor(e,t,i,n){super(e,t,i),this.username=n}}class tM extends tL{constructor(e,t){super(e,"facebook.com",t)}}class tU extends tD{constructor(e,t){super(e,"github.com",t,"string"==typeof(null==t?void 0:t.login)?null==t?void 0:t.login:null)}}class tx extends tL{constructor(e,t){super(e,"google.com",t)}}class tF extends tD{constructor(e,t,i){super(e,"twitter.com",t,i)}}function tj(e){let{user:t,_tokenResponse:i}=e;return t.isAnonymous&&!i?{providerId:null,isNewUser:!1,profile:null}:/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){var t,i;if(!e)return null;let{providerId:n}=e,r=e.rawUserInfo?JSON.parse(e.rawUserInfo):{},s=e.isNewUser||"identitytoolkit#SignupNewUserResponse"===e.kind;if(!n&&(null==e?void 0:e.idToken)){let n=null===(i=null===(t=G(e.idToken))||void 0===t?void 0:t.firebase)||void 0===i?void 0:i.sign_in_provider;if(n)return new tL(s,"anonymous"!==n&&"custom"!==n?n:null)}if(!n)return null;switch(n){case"facebook.com":return new tM(s,r);case"github.com":return new tU(s,r);case"google.com":return new tx(s,r);case"twitter.com":return new tF(s,r,e.screenName||null);case"custom":case"anonymous":return new tL(s,null);default:return new tL(s,n,r)}}(i)}function tV(e,t,i,n){return(0,r.m9)(e).onAuthStateChanged(t,i,n)}class tz{constructor(e,t,i){this.type=e,this.credential=t,this.auth=i}static _fromIdtoken(e,t){return new tz("enroll",e,t)}static _fromMfaPendingCredential(e){return new tz("signin",e)}toJSON(){let e="enroll"===this.type?"idToken":"pendingCredential";return{multiFactorSession:{[e]:this.credential}}}static fromJSON(e){var t,i;if(null==e?void 0:e.multiFactorSession){if(null===(t=e.multiFactorSession)||void 0===t?void 0:t.pendingCredential)return tz._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(null===(i=e.multiFactorSession)||void 0===i?void 0:i.idToken)return tz._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tB{constructor(e,t,i){this.session=e,this.hints=t,this.signInResolver=i}static _fromError(e,t){let i=eI(e),n=t.customData._serverResponse,r=(n.mfaInfo||[]).map(e=>tc._fromServerResponse(i,e));I(n.mfaPendingCredential,i,"internal-error");let s=tz._fromMfaPendingCredential(n.mfaPendingCredential);return new tB(s,r,async e=>{let r=await e._process(i,s);delete n.mfaInfo,delete n.mfaPendingCredential;let o=Object.assign(Object.assign({},n),{idToken:r.idToken,refreshToken:r.refreshToken});switch(t.operationType){case"signIn":let a=await e6._fromIdTokenResponse(i,t.operationType,o);return await i._updateCurrentUser(a.user),a;case"reauthenticate":return I(t.user,i,"internal-error"),e6._forOperation(t.user,t.operationType,o);default:m(i,"internal-error")}})}async resolveSignIn(e){return this.signInResolver(e)}}function tH(e,t){var i;let n=(0,r.m9)(e);return I(t.customData.operationType,n,"argument-error"),I(null===(i=t.customData._serverResponse)||void 0===i?void 0:i.mfaPendingCredential,n,"argument-error"),tB._fromError(n,t)}class tW{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(t=>tc._fromServerResponse(e.auth,t)))})}static _fromUser(e){return new tW(e)}async getSession(){return tz._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,t){let i=await this.getSession(),n=await K(this.user,e._process(this.user.auth,i,t));return await this.user._updateTokensIfNecessary(n),this.user.reload()}async unenroll(e){let t="string"==typeof e?e:e.uid,i=await this.user.getIdToken();try{var n;let e=await K(this.user,(n=this.user.auth,M(n,"POST","/v2/accounts/mfaEnrollment:withdraw",D(n,{idToken:i,mfaEnrollmentId:t}))));this.enrolledFactors=this.enrolledFactors.filter(({uid:e})=>e!==t),await this.user._updateTokensIfNecessary(e),await this.user.reload()}catch(e){throw e}}}let t$=new WeakMap;function tq(e){let t=(0,r.m9)(e);return t$.has(t)||t$.set(t,tW._fromUser(t)),t$.get(t)}let tG="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tK{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{if(!this.storage)return Promise.resolve(!1);return this.storage.setItem(tG,"1"),this.storage.removeItem(tG),Promise.resolve(!0)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){let t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}class tJ extends tK{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(){let e=(0,r.z$)();return eu(e)||eg(e)}()&&function(){try{return!!(window&&window!==window.top)}catch(e){return!1}}(),this.fallbackToPolling=ev(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(let t of Object.keys(this.listeners)){let i=this.storage.getItem(t),n=this.localCache[t];i!==n&&e(t,n,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((e,t,i)=>{this.notifyListeners(e,i)});return}let i=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){let n=this.storage.getItem(i);if(e.newValue!==n)null!==e.newValue?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!t)return}let n=()=>{let e=this.storage.getItem(i);(t||this.localCache[i]!==e)&&this.notifyListeners(i,e)},s=this.storage.getItem(i);(0,r.w1)()&&10===document.documentMode&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(n,10):n()}notifyListeners(e,t){this.localCache[e]=t;let i=this.listeners[e];if(i)for(let e of Array.from(i))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){let t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}tJ.type="LOCAL";let tX=tJ;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tY extends tK{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}tY.type="SESSION";let tZ=tY;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tQ{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){let t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;let i=new tQ(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){let{eventId:t,eventType:i,data:n}=e.data,r=this.handlersMap[i];if(!(null==r?void 0:r.size))return;e.ports[0].postMessage({status:"ack",eventId:t,eventType:i});let s=Array.from(r).map(async t=>t(e.origin,n)),o=await Promise.all(s.map(async e=>{try{let t=await e;return{fulfilled:!0,value:t}}catch(e){return{fulfilled:!1,reason:e}}}));e.ports[0].postMessage({status:"done",eventId:t,eventType:i,response:o})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t0(e="",t=10){let i="";for(let e=0;e<t;e++)i+=Math.floor(10*Math.random());return e+i}tQ.receivers=[];/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){let n,r;let s="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!s)throw Error("connection_unavailable");return new Promise((o,a)=>{let l=t0("",20);s.port1.start();let u=setTimeout(()=>{a(Error("unsupported_event"))},i);r={messageChannel:s,onMessage(e){if(e.data.eventId===l)switch(e.data.status){case"ack":clearTimeout(u),n=setTimeout(()=>{a(Error("timeout"))},3e3);break;case"done":clearTimeout(n),o(e.data.response);break;default:clearTimeout(u),clearTimeout(n),a(Error("invalid_response"))}}},this.handlers.add(r),s.port1.addEventListener("message",r.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[s.port2])}).finally(()=>{r&&this.removeMessageHandler(r)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t2(){return window}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t3(){return void 0!==t2().WorkerGlobalScope&&"function"==typeof t2().importScripts}async function t4(){if(!(null==navigator?void 0:navigator.serviceWorker))return null;try{let e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let t6="firebaseLocalStorageDb",t5="firebaseLocalStorage",t9="fbase_key";class t8{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function t7(e,t){return e.transaction([t5],t?"readwrite":"readonly").objectStore(t5)}function ie(){let e=indexedDB.open(t6,1);return new Promise((t,i)=>{e.addEventListener("error",()=>{i(e.error)}),e.addEventListener("upgradeneeded",()=>{let t=e.result;try{t.createObjectStore(t5,{keyPath:t9})}catch(e){i(e)}}),e.addEventListener("success",async()=>{let i=e.result;i.objectStoreNames.contains(t5)?t(i):(i.close(),await function(){let e=indexedDB.deleteDatabase(t6);return new t8(e).toPromise()}(),t(await ie()))})})}async function it(e,t,i){let n=t7(e,!0).put({[t9]:t,value:i});return new t8(n).toPromise()}async function ii(e,t){let i=t7(e,!1).get(t),n=await new t8(i).toPromise();return void 0===n?null:n.value}function ir(e,t){let i=t7(e,!0).delete(t);return new t8(i).toPromise()}class is{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await ie()),this.db}async _withRetries(e){let t=0;for(;;)try{let t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return t3()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=tQ._getInstance(t3()?self:null),this.receiver._subscribe("keyChanged",async(e,t)=>{let i=await this._poll();return{keyProcessed:i.includes(t.key)}}),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await t4(),!this.activeServiceWorker)return;this.sender=new t1(this.activeServiceWorker);let i=await this.sender._send("ping",{},800);i&&(null===(e=i[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=i[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null==navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;let e=await ie();return await it(e,tG,"1"),await ir(e,tG),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>it(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){let t=await this._withRetries(t=>ii(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>ir(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){let e=await this._withRetries(e=>{let t=t7(e,!1).getAll();return new t8(t).toPromise()});if(!e||0!==this.pendingWrites)return[];let t=[],i=new Set;for(let{fbase_key:n,value:r}of e)i.add(n),JSON.stringify(this.localCache[n])!==JSON.stringify(r)&&(this.notifyListeners(n,r),t.push(n));for(let e of Object.keys(this.localCache))this.localCache[e]&&!i.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;let i=this.listeners[e];if(i)for(let e of Array.from(i))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}is.type="LOCAL";let io=is;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ia(e){return(await M(e,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}function il(e){return new Promise((t,i)=>{var n,r;let s=document.createElement("script");s.setAttribute("src",e),s.onload=t,s.onerror=e=>{let t=v("internal-error");t.customData=e,i(t)},s.type="text/javascript",s.charset="UTF-8",(null!==(r=null===(n=document.getElementsByTagName("head"))||void 0===n?void 0:n[0])&&void 0!==r?r:document).appendChild(s)})}function iu(e){return`__${e}${Math.floor(1e6*Math.random())}`}class ih{constructor(e){this.auth=e,this.counter=1e12,this._widgets=new Map}render(e,t){let i=this.counter;return this._widgets.set(i,new ic(e,this.auth.name,t||{})),this.counter++,i}reset(e){var t;let i=e||1e12;null===(t=this._widgets.get(i))||void 0===t||t.delete(),this._widgets.delete(i)}getResponse(e){var t;return(null===(t=this._widgets.get(e||1e12))||void 0===t?void 0:t.getResponse())||""}async execute(e){var t;return null===(t=this._widgets.get(e||1e12))||void 0===t||t.execute(),""}}class ic{constructor(e,t,i){this.params=i,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};let n="string"==typeof e?document.getElementById(e):e;I(n,"argument-error",{appName:t}),this.container=n,this.isVisible="invisible"!==this.params.size,this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),this.timerId||(this.timerId=window.setTimeout(()=>{this.responseToken=function(e){let t=[],i="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let e=0;e<50;e++)t.push(i.charAt(Math.floor(Math.random()*i.length)));return t.join("")}(0);let{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch(e){}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch(e){}this.isVisible&&this.execute()},6e4)},500))}checkIfDeleted(){if(this.deleted)throw Error("reCAPTCHA mock was already deleted!")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let id=iu("rcb"),ip=new C(3e4,6e4);class ig{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(null===(e=t2().grecaptcha)||void 0===e?void 0:e.render)}load(e,t=""){return(I(t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t),e,"argument-error"),this.shouldResolveImmediately(t))?Promise.resolve(t2().grecaptcha):new Promise((i,n)=>{let s=t2().setTimeout(()=>{n(v(e,"network-request-failed"))},ip.get());t2()[id]=()=>{t2().clearTimeout(s),delete t2()[id];let r=t2().grecaptcha;if(!r){n(v(e,"internal-error"));return}let o=r.render;r.render=(e,t)=>{let i=o(e,t);return this.counter++,i},this.hostLanguage=t,i(r)};let o=`https://www.google.com/recaptcha/api.js??${(0,r.xO)({onload:id,render:"explicit",hl:t})}`;il(o).catch(()=>{clearTimeout(s),n(v(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(null===(t=t2().grecaptcha)||void 0===t?void 0:t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}class im{async load(e){return new ih(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let iv="recaptcha",iy={theme:"light",type:"image"};class i_{constructor(e,t=Object.assign({},iy),i){this.parameters=t,this.type=iv,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=eI(i),this.isInvisible="invisible"===this.parameters.size,I("undefined"!=typeof document,this.auth,"operation-not-supported-in-this-environment");let n="string"==typeof e?document.getElementById(e):e;I(n,this.auth,"argument-error"),this.container=n,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new im:new ig,this.validateStartingState()}async verify(){this.assertNotDestroyed();let e=await this.render(),t=this.getAssertedRecaptcha(),i=t.getResponse(e);return i||new Promise(i=>{let n=e=>{e&&(this.tokenChangeListeners.delete(n),i(e))};this.tokenChangeListeners.add(n),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise||(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e})),this.renderPromise}_reset(){this.assertNotDestroyed(),null!==this.widgetId&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){I(!this.parameters.sitekey,this.auth,"argument-error"),I(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),I("undefined"!=typeof document,this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(e=>e(t)),"function"==typeof e)e(t);else if("string"==typeof e){let i=t2()[e];"function"==typeof i&&i(t)}}}assertNotDestroyed(){I(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){let t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){let e;I(S()&&!t3(),this.auth,"internal-error"),await (e=null,new Promise(t=>{if("complete"===document.readyState){t();return}e=()=>t(),window.addEventListener("load",e)}).catch(t=>{throw e&&window.removeEventListener("load",e),t})),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);let t=await ia(this.auth);I(t,this.auth,"internal-error"),this.parameters.sitekey=t}getAssertedRecaptcha(){return I(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iw{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){let t=eq._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function iI(e,t,i){let n=eI(e),s=await iT(n,t,(0,r.m9)(i));return new iw(s,e=>to(n,e))}async function ib(e,t,i){let n=(0,r.m9)(e);await tn(!1,n,"phone");let s=await iT(n.auth,t,(0,r.m9)(i));return new iw(s,e=>ta(n,e))}async function iE(e,t,i){let n=(0,r.m9)(e),s=await iT(n.auth,t,(0,r.m9)(i));return new iw(s,e=>tl(n,e))}async function iT(e,t,i){var n,r,s;let o=await i.verify();try{let a;if(I("string"==typeof o,e,"argument-error"),I(i.type===iv,e,"argument-error"),a="string"==typeof t?{phoneNumber:t}:t,"session"in a){let t=a.session;if("phoneNumber"in a){I("enroll"===t.type,e,"internal-error");let i=await (r={idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:a.phoneNumber,recaptchaToken:o}},M(e,"POST","/v2/accounts/mfaEnrollment:start",D(e,r)));return i.phoneSessionInfo.sessionInfo}{I("signin"===t.type,e,"internal-error");let i=(null===(n=a.multiFactorHint)||void 0===n?void 0:n.uid)||a.multiFactorUid;I(i,e,"missing-multi-factor-info");let r=await (s={mfaPendingCredential:t.credential,mfaEnrollmentId:i,phoneSignInInfo:{recaptchaToken:o}},M(e,"POST","/v2/accounts/mfaSignIn:start",D(e,s)));return r.phoneResponseInfo.sessionInfo}}{let{sessionInfo:t}=await ez(e,{phoneNumber:a.phoneNumber,recaptchaToken:o});return t}}finally{i._reset()}}async function ik(e,t){await ti((0,r.m9)(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iA{constructor(e){this.providerId=iA.PROVIDER_ID,this.auth=eI(e)}verifyPhoneNumber(e,t){return iT(this.auth,e,(0,r.m9)(t))}static credential(e,t){return eq._fromVerification(e,t)}static credentialFromResult(e){return iA.credentialFromTaggedObject(e)}static credentialFromError(e){return iA.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{phoneNumber:t,temporaryProof:i}=e;return t&&i?eq._fromTokenResponse(t,i):null}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iS(e,t){return t?k(t):(I(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}iA.PROVIDER_ID="phone",iA.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iR extends eA{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ej(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ej(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ej(e,this._buildIdpRequest())}_buildIdpRequest(e){let t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function iC(e){return ts(e.auth,new iR(e),e.bypassAuthState)}function iO(e){let{auth:t,user:i}=e;return I(i,t,"internal-error"),tr(i,new iR(e),e.bypassAuthState)}async function iN(e){let{auth:t,user:i}=e;return I(i,t,"internal-error"),ti(i,new iR(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iP{constructor(e,t,i,n,r=!1){this.auth=e,this.resolver=i,this.user=n,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}})}async onAuthEvent(e){let{urlResponse:t,sessionId:i,postBody:n,tenantId:r,error:s,type:o}=e;if(s){this.reject(s);return}let a={auth:this.auth,requestUri:t,sessionId:i,tenantId:r||void 0,postBody:n||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return iC;case"linkViaPopup":case"linkViaRedirect":return iN;case"reauthViaPopup":case"reauthViaRedirect":return iO;default:m(this.auth,"internal-error")}}resolve(e){E(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){E(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let iL=new C(2e3,1e4);async function iD(e,t,i){let n=eI(e);_(e,t,eJ);let r=iS(n,i),s=new ix(n,"signInViaPopup",t,r);return s.executeNotNull()}async function iM(e,t,i){let n=(0,r.m9)(e);_(n.auth,t,eJ);let s=iS(n.auth,i),o=new ix(n.auth,"reauthViaPopup",t,s,n);return o.executeNotNull()}async function iU(e,t,i){let n=(0,r.m9)(e);_(n.auth,t,eJ);let s=iS(n.auth,i),o=new ix(n.auth,"linkViaPopup",t,s,n);return o.executeNotNull()}class ix extends iP{constructor(e,t,i,n,r){super(e,t,n,r),this.provider=i,this.authWindow=null,this.pollId=null,ix.currentPopupAction&&ix.currentPopupAction.cancel(),ix.currentPopupAction=this}async executeNotNull(){let e=await this.execute();return I(e,this.auth,"internal-error"),e}async onExecution(){E(1===this.filter.length,"Popup operations only handle one event");let e=t0();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(v(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(v(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ix.currentPopupAction=null}pollUserCancellation(){let e=()=>{var t,i;if(null===(i=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===i?void 0:i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(v(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,iL.get())};e()}}ix.currentPopupAction=null;let iF=new Map;class ij extends iP{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=iF.get(this.auth._key());if(!e){try{let t=await iV(this.resolver,this.auth),i=t?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}iF.set(this.auth._key(),e)}return this.bypassAuthState||iF.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"===e.type){this.resolve(null);return}if(e.eventId){let t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function iV(e,t){let i=i$(t),n=iW(e);if(!await n._isAvailable())return!1;let r=await n._get(i)==="true";return await n._remove(i),r}async function iz(e,t){return iW(e)._set(i$(t),"true")}function iB(){iF.clear()}function iH(e,t){iF.set(e._key(),t)}function iW(e){return k(e._redirectPersistence)}function i$(e){return es("pendingRedirect",e.config.apiKey,e.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iq(e,t,i){return iG(e,t,i)}async function iG(e,t,i){let n=eI(e);_(e,t,eJ),await n._initializationPromise;let r=iS(n,i);return await iz(r,n),r._openRedirect(n,t,"signInViaRedirect")}function iK(e,t,i){return iJ(e,t,i)}async function iJ(e,t,i){let n=(0,r.m9)(e);_(n.auth,t,eJ),await n.auth._initializationPromise;let s=iS(n.auth,i);await iz(s,n.auth);let o=await i0(n);return s._openRedirect(n.auth,t,"reauthViaRedirect",o)}function iX(e,t,i){return iY(e,t,i)}async function iY(e,t,i){let n=(0,r.m9)(e);_(n.auth,t,eJ),await n.auth._initializationPromise;let s=iS(n.auth,i);await tn(!1,n,t.providerId),await iz(s,n.auth);let o=await i0(n);return s._openRedirect(n.auth,t,"linkViaRedirect",o)}async function iZ(e,t){return await eI(e)._initializationPromise,iQ(e,t,!1)}async function iQ(e,t,i=!1){let n=eI(e),r=iS(n,t),s=new ij(n,r,i),o=await s.execute();return o&&!i&&(delete o.user._redirectEventId,await n._persistUserIfCurrent(o.user),await n._setRedirectUser(null,t)),o}async function i0(e){let t=t0(`${e.uid}:::`);return e._redirectEventId=t,await e.auth._setRedirectUser(e),await e.auth._persistUserIfCurrent(e),t}class i1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return i3(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!i3(e)){let n=(null===(i=e.error.code)||void 0===i?void 0:i.split("auth/")[1])||"internal-error";t.onError(v(this.auth,n))}else t.onAuthEvent(e)}isEventForConsumer(e,t){let i=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(i2(e))}saveEventToCache(e){this.cachedEventUids.add(i2(e)),this.lastProcessedEventTime=Date.now()}}function i2(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function i3({type:e,error:t}){return"unknown"===e&&(null==t?void 0:t.code)==="auth/no-auth-event"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function i4(e,t={}){return M(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let i6=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,i5=/^https?/;async function i9(e){if(e.config.emulator)return;let{authorizedDomains:t}=await i4(e);for(let e of t)try{if(function(e){let t=A(),{protocol:i,hostname:n}=new URL(t);if(e.startsWith("chrome-extension://")){let r=new URL(e);return""===r.hostname&&""===n?"chrome-extension:"===i&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===i&&r.hostname===n}if(!i5.test(i))return!1;if(i6.test(e))return n===e;let r=e.replace(/\./g,"\\."),s=RegExp("^(.+\\."+r+"|"+r+")$","i");return s.test(n)}(e))return}catch(e){}m(e,"unauthorized-domain")}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let i8=new C(3e4,6e4);function i7(){let e=t2().___jsl;if(null==e?void 0:e.H){for(let t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}}let ne=null,nt=new C(5e3,15e3),ni={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},nn=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);async function nr(e){let t=await (ne=ne||new Promise((t,i)=>{var n,r,s;function o(){i7(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{i7(),i(v(e,"network-request-failed"))},timeout:i8.get()})}if(null===(r=null===(n=t2().gapi)||void 0===n?void 0:n.iframes)||void 0===r?void 0:r.Iframe)t(gapi.iframes.getContext());else if(null===(s=t2().gapi)||void 0===s?void 0:s.load)o();else{let t=iu("iframefcb");return t2()[t]=()=>{gapi.load?o():i(v(e,"network-request-failed"))},il(`https://apis.google.com/js/api.js?onload=${t}`).catch(e=>i(e))}}).catch(e=>{throw ne=null,e})),i=t2().gapi;return I(i,e,"internal-error"),t.open({where:document.body,url:function(e){let t=e.config;I(t.authDomain,e,"auth-domain-config-required");let i=t.emulator?O(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,n={apiKey:t.apiKey,appName:e.name,v:s.SDK_VERSION},o=nn.get(e.config.apiHost);o&&(n.eid=o);let a=e._getFrameworks();return a.length&&(n.fw=a.join(",")),`${i}?${(0,r.xO)(n).slice(1)}`}(e),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ni,dontclear:!0},t=>new Promise(async(i,n)=>{await t.restyle({setHideOnLeave:!1});let r=v(e,"network-request-failed"),s=t2().setTimeout(()=>{n(r)},nt.get());function o(){t2().clearTimeout(s),i(t)}t.ping(o).then(o,()=>{n(r)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ns={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class no{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function na(e,t,i,n,o,a){I(e.config.authDomain,e,"auth-domain-config-required"),I(e.config.apiKey,e,"invalid-api-key");let l={apiKey:e.config.apiKey,appName:e.name,authType:i,redirectUrl:n,v:s.SDK_VERSION,eventId:o};if(t instanceof eJ)for(let[i,n]of(t.setDefaultLanguage(e.languageCode),l.providerId=t.providerId||"",(0,r.xb)(t.getCustomParameters())||(l.customParameters=JSON.stringify(t.getCustomParameters())),Object.entries(a||{})))l[i]=n;if(t instanceof eX){let e=t.getScopes().filter(e=>""!==e);e.length>0&&(l.scopes=e.join(","))}e.tenantId&&(l.tid=e.tenantId);let u=l;for(let e of Object.keys(u))void 0===u[e]&&delete u[e];return`${function({config:e}){return e.emulator?O(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}(e)}?${(0,r.xO)(u).slice(1)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nl="webStorageSupport",nu=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=tZ,this._completeRedirectFn=iQ,this._overrideRedirectResult=iH}async _openPopup(e,t,i,n){var s;E(null===(s=this.eventManagers[e._key()])||void 0===s?void 0:s.manager,"_initialize() not called before _openPopup()");let o=na(e,t,i,A(),n);return function(e,t,i,n=500,s=600){let o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-n)/2,0).toString(),l="",u=Object.assign(Object.assign({},ns),{width:n.toString(),height:s.toString(),top:o,left:a}),h=(0,r.z$)().toLowerCase();i&&(l=eh(h)?"_blank":i),el(h)&&(t=t||"http://localhost",u.scrollbars="yes");let c=Object.entries(u).reduce((e,[t,i])=>`${e}${t}=${i},`,"");if(function(e=(0,r.z$)()){var t;return eg(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(h)&&"_self"!==l)return function(e,t){let i=document.createElement("a");i.href=e,i.target=t;let n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),i.dispatchEvent(n)}(t||"",l),new no(null);let d=window.open(t||"",l,c);I(d,e,"popup-blocked");try{d.focus()}catch(e){}return new no(d)}(e,o,t0())}async _openRedirect(e,t,i,n){var r;return await this._originValidation(e),r=na(e,t,i,A(),n),t2().location.href=r,new Promise(()=>{})}_initialize(e){let t=e._key();if(this.eventManagers[t]){let{manager:e,promise:i}=this.eventManagers[t];return e?Promise.resolve(e):(E(i,"If manager is not set, promise should be"),i)}let i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){let t=await nr(e),i=new i1(e);return t.register("authEvent",t=>{I(null==t?void 0:t.authEvent,e,"invalid-auth-event");let n=i.onEvent(t.authEvent);return{status:n?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){let i=this.iframes[e._key()];i.send(nl,{type:nl},i=>{var n;let r=null===(n=null==i?void 0:i[0])||void 0===n?void 0:n[nl];void 0!==r&&t(!!r),m(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){let t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=i9(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ev()||eu()||eg()}};class nh{constructor(e){this.factorId=e}_process(e,t,i){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,i);case"signin":return this._finalizeSignIn(e,t.credential);default:return b("unexpected MultiFactorSessionType")}}}class nc extends nh{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new nc(e)}_finalizeEnroll(e,t,i){return M(e,"POST","/v2/accounts/mfaEnrollment:finalize",D(e,{idToken:t,displayName:i,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}_finalizeSignIn(e,t){return M(e,"POST","/v2/accounts/mfaSignIn:finalize",D(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}}class nd{constructor(){}static assertion(e){return nc._fromCredential(e)}}nd.FACTOR_ID="phone";var nf="@firebase/auth",np="0.21.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;let t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;let t=this.auth.onIdTokenChanged(t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();let t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){I(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}let nm=(0,r.Pz)("authIdTokenMaxAge")||300,nv=null,ny=e=>async t=>{let i=t&&await t.getIdTokenResult(),n=i&&(new Date().getTime()-Date.parse(i.issuedAtTime))/1e3;if(n&&n>nm)return;let r=null==i?void 0:i.token;nv!==r&&(nv=r,await fetch(e,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function n_(e=(0,s.getApp)()){let t=(0,s._getProvider)(e,"auth");if(t.isInitialized())return t.getImmediate();let i=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e,t){let i=(0,s._getProvider)(e,"auth");if(i.isInitialized()){let e=i.getImmediate(),n=i.getOptions();if((0,r.vZ)(n,null!=t?t:{}))return e;m(e,"already-initialized")}let n=i.initialize({options:t});return n}(e,{popupRedirectResolver:nu,persistence:[io,tX,tZ]}),n=(0,r.Pz)("authTokenSyncURL");if(n){var o,a;let e=ny(n);o=()=>e(i.currentUser),(0,r.m9)(i).beforeAuthStateChanged(e,o),a=t=>e(t),(0,r.m9)(i).onIdTokenChanged(a,void 0,void 0)}let l=(0,r.q4)("auth");return l&&eE(i,`http://${l}`),i}n="Browser",(0,s._registerComponent)(new l.wA("auth",(e,{options:t})=>{let i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=i.options;return((e,i)=>{I(s&&!s.includes(":"),"invalid-api-key",{appName:e.name}),I(!(null==o?void 0:o.includes(":")),"argument-error",{appName:e.name});let r={apiKey:s,authDomain:o,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ey(n)},a=new ew(e,i,r);return function(e,t){let i=(null==t?void 0:t.persistence)||[],n=(Array.isArray(i)?i:[i]).map(k);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(n,null==t?void 0:t.popupRedirectResolver)}(a,t),a})(i,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{let n=e.getProvider("auth-internal");n.initialize()})),(0,s._registerComponent)(new l.wA("auth-internal",e=>{let t=eI(e.getProvider("auth").getImmediate());return new ng(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),(0,s.registerVersion)(nf,np,/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(n)),(0,s.registerVersion)(nf,np,"esm2017")},4444:function(e,t,i){"use strict";i.d(t,{BH:function(){return v},L:function(){return l},LL:function(){return R},Pz:function(){return m},UG:function(){return w},ZB:function(){return function e(t,i){if(!(i instanceof Object))return i;switch(i.constructor){case Date:return new Date(i.getTime());case Object:void 0===t&&(t={});break;case Array:t=[];break;default:return i}for(let n in i)i.hasOwnProperty(n)&&"__proto__"!==n&&(t[n]=e(t[n],i[n]));return t}},ZR:function(){return S},aH:function(){return g},b$:function(){return E},eu:function(){return A},hl:function(){return k},jU:function(){return I},m9:function(){return j},ne:function(){return U},pd:function(){return M},q4:function(){return p},r3:function(){return O},ru:function(){return b},tV:function(){return u},uI:function(){return _},vZ:function(){return function e(t,i){if(t===i)return!0;let n=Object.keys(t),r=Object.keys(i);for(let s of n){if(!r.includes(s))return!1;let n=t[s],o=i[s];if(P(n)&&P(o)){if(!e(n,o))return!1}else if(n!==o)return!1}for(let e of r)if(!n.includes(e))return!1;return!0}},w1:function(){return T},xO:function(){return L},xb:function(){return N},z$:function(){return y},zd:function(){return D}});var n=i(3454);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let r=function(e){let t=[],i=0;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);r<128?t[i++]=r:r<2048?(t[i++]=r>>6|192,t[i++]=63&r|128):(64512&r)==55296&&n+1<e.length&&(64512&e.charCodeAt(n+1))==56320?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++n)),t[i++]=r>>18|240,t[i++]=r>>12&63|128,t[i++]=r>>6&63|128,t[i++]=63&r|128):(t[i++]=r>>12|224,t[i++]=r>>6&63|128,t[i++]=63&r|128)}return t},s=function(e){let t=[],i=0,n=0;for(;i<e.length;){let r=e[i++];if(r<128)t[n++]=String.fromCharCode(r);else if(r>191&&r<224){let s=e[i++];t[n++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){let s=e[i++],o=e[i++],a=e[i++],l=((7&r)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;t[n++]=String.fromCharCode(55296+(l>>10)),t[n++]=String.fromCharCode(56320+(1023&l))}else{let s=e[i++],o=e[i++];t[n++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return t.join("")},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let i=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let t=0;t<e.length;t+=3){let r=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,l=a?e[t+2]:0,u=r>>2,h=(3&r)<<4|o>>4,c=(15&o)<<2|l>>6,d=63&l;a||(d=64,s||(c=64)),n.push(i[u],i[h],i[c],i[d])}return n.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):s(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let i=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let t=0;t<e.length;){let r=i[e.charAt(t++)],s=t<e.length,o=s?i[e.charAt(t)]:0;++t;let a=t<e.length,l=a?i[e.charAt(t)]:64;++t;let u=t<e.length,h=u?i[e.charAt(t)]:64;if(++t,null==r||null==o||null==l||null==h)throw Error();let c=r<<2|o>>4;if(n.push(c),64!==l){let e=o<<4&240|l>>2;if(n.push(e),64!==h){let e=l<<6&192|h;n.push(e)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},a=function(e){let t=r(e);return o.encodeByteArray(t,!0)},l=function(e){return a(e).replace(/\./g,"")},u=function(e){try{return o.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null},h=()=>/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==i.g)return i.g;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,c=()=>{if(void 0===n||void 0===n.env)return;let e=n.env.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},d=()=>{let e;if("undefined"==typeof document)return;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}let t=e&&u(e[1]);return t&&JSON.parse(t)},f=()=>{try{return h()||c()||d()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},p=e=>{var t,i;return null===(i=null===(t=f())||void 0===t?void 0:t.emulatorHosts)||void 0===i?void 0:i[e]},g=()=>{var e;return null===(e=f())||void 0===e?void 0:e.config},m=e=>{var t;return null===(t=f())||void 0===t?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function _(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(y())}function w(){var e;let t=null===(e=f())||void 0===e?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(i.g.process)}catch(e){return!1}}function I(){return"object"==typeof self&&self.self===self}function b(){let e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function E(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function T(){let e=y();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function k(){try{return"object"==typeof indexedDB}catch(e){return!1}}function A(){return new Promise((e,t)=>{try{let i=!0,n="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(n);r.onsuccess=()=>{r.result.close(),i||self.indexedDB.deleteDatabase(n),e(!0)},r.onupgradeneeded=()=>{i=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})}class S extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name="FirebaseError",Object.setPrototypeOf(this,S.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,R.prototype.create)}}class R{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){let i=t[0]||{},n=`${this.service}/${e}`,r=this.errors[e],s=r?r.replace(C,(e,t)=>{let n=i[t];return null!=n?String(n):`<${t}?>`}):"Error",o=`${this.serviceName}: ${s} (${n}).`,a=new S(n,o,i);return a}}let C=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function N(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function P(e){return null!==e&&"object"==typeof e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(e){let t=[];for(let[i,n]of Object.entries(e))Array.isArray(n)?n.forEach(e=>{t.push(encodeURIComponent(i)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(i)+"="+encodeURIComponent(n));return t.length?"&"+t.join("&"):""}function D(e){let t={},i=e.replace(/^\?/,"").split("&");return i.forEach(e=>{if(e){let[i,n]=e.split("=");t[decodeURIComponent(i)]=decodeURIComponent(n)}}),t}function M(e){let t=e.indexOf("?");if(!t)return"";let i=e.indexOf("#",t);return e.substring(t,i>0?i:void 0)}function U(e,t){let i=new x(e,t);return i.subscribe.bind(i)}class x{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let n;if(void 0===e&&void 0===t&&void 0===i)throw Error("Missing Observer.");void 0===(n=!function(e,t){if("object"!=typeof e||null===e)return!1;for(let i of t)if(i in e&&"function"==typeof e[i])return!0;return!1}(e,["next","error","complete"])?{next:e,error:t,complete:i}:e).next&&(n.next=F),void 0===n.error&&(n.error=F),void 0===n.complete&&(n.complete=F);let r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch(e){}}),this.observers.push(n),r}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function F(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(e){return e&&e._delegate?e._delegate:e}},3454:function(e,t,i){"use strict";var n,r;e.exports=(null==(n=i.g.process)?void 0:n.env)&&"object"==typeof(null==(r=i.g.process)?void 0:r.env)?i.g.process:i(7663)},6840:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return i(1049)}])},6532:function(e,t,i){"use strict";i.d(t,{Z:function(){return nX}});var n,r,s,o,a,l,u,h=i(4444),c=i(8463),d=i(5816),f=i(3333);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p{constructor(e,t){this._delegate=e,this.firebase=t,(0,d._addComponent)(e,new c.wA("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),(0,d.deleteApp)(this._delegate)))}_getService(e,t=d._DEFAULT_ENTRY_NAME){var i;this._delegate.checkDestroyed();let n=this._delegate.container.getProvider(e);return n.isInitialized()||(null===(i=n.getComponent())||void 0===i?void 0:i.instantiationMode)!=="EXPLICIT"||n.initialize(),n.getImmediate({identifier:t})}_removeServiceInstance(e,t=d._DEFAULT_ENTRY_NAME){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){(0,d._addComponent)(this._delegate,e)}_addOrOverwriteComponent(e){(0,d._addOrOverwriteComponent)(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}let g=new h.LL("app-compat","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."}),m=/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e(){let t=/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){let t={},i={__esModule:!0,initializeApp:function(n,r={}){let s=d.initializeApp(n,r);if((0,h.r3)(t,s.name))return t[s.name];let o=new e(s,i);return t[s.name]=o,o},app:n,registerVersion:d.registerVersion,setLogLevel:d.setLogLevel,onLog:d.onLog,apps:null,SDK_VERSION:d.SDK_VERSION,INTERNAL:{registerComponent:function(t){let r=t.name,s=r.replace("-compat","");if(d._registerComponent(t)&&"PUBLIC"===t.type){let o=(e=n())=>{if("function"!=typeof e[s])throw g.create("invalid-app-argument",{appName:r});return e[s]()};void 0!==t.serviceProps&&(0,h.ZB)(o,t.serviceProps),i[s]=o,e.prototype[s]=function(...e){let i=this._getService.bind(this,r);return i.apply(this,t.multipleInstances?e:[])}}return"PUBLIC"===t.type?i[s]:null},removeApp:function(e){delete t[e]},useAsService:function(e,t){return"serverAuth"===t?null:t},modularAPIs:d}};function n(e){if(e=e||d._DEFAULT_ENTRY_NAME,!(0,h.r3)(t,e))throw g.create("no-app",{appName:e});return t[e]}return i.default=i,Object.defineProperty(i,"apps",{get:function(){return Object.keys(t).map(e=>t[e])}}),n.App=e,i}(p);return t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:e,extendNamespace:function(e){(0,h.ZB)(t,e)},createSubscribe:h.ne,ErrorFactory:h.LL,deepExtend:h.ZB}),t}(),v=new f.Yd("@firebase/app-compat");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if((0,h.jU)()&&void 0!==self.firebase){v.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);let e=self.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&v.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}(0,d.registerVersion)("@firebase/app-compat","0.2.3",void 0),/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */m.registerVersion("firebase","9.17.1","app-compat");var y=i(2191);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(){return window}async function w(e,t,i){var n;let{BuildInfo:r}=_();(0,y.ap)(t.sessionId,"AuthEvent did not contain a session ID");let s=await E(t.sessionId),o={};return(0,y.aq)()?o.ibi=r.packageName:(0,y.ar)()?o.apn=r.packageName:(0,y.as)(e,"operation-not-supported-in-this-environment"),r.displayName&&(o.appDisplayName=r.displayName),o.sessionId=s,(0,y.at)(e,i,t.type,void 0,null!==(n=t.eventId)&&void 0!==n?n:void 0,o)}async function I(e){let{BuildInfo:t}=_(),i={};(0,y.aq)()?i.iosBundleId=t.packageName:(0,y.ar)()?i.androidPackageName=t.packageName:(0,y.as)(e,"operation-not-supported-in-this-environment"),await (0,y.au)(e,i)}async function b(e,t,i){let{cordova:n}=_(),r=()=>{};try{await new Promise((s,o)=>{let a=null;function l(){var e;s();let t=null===(e=n.plugins.browsertab)||void 0===e?void 0:e.close;"function"==typeof t&&t(),"function"==typeof(null==i?void 0:i.close)&&i.close()}function u(){a||(a=window.setTimeout(()=>{o((0,y.aw)(e,"redirect-cancelled-by-user"))},2e3))}function h(){(null==document?void 0:document.visibilityState)==="visible"&&u()}t.addPassiveListener(l),document.addEventListener("resume",u,!1),(0,y.ar)()&&document.addEventListener("visibilitychange",h,!1),r=()=>{t.removePassiveListener(l),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",h,!1),a&&window.clearTimeout(a)}})}finally{r()}}async function E(e){let t=function(e){if((0,y.ap)(/[0-9a-zA-Z]+/.test(e),"Can only convert alpha-numeric strings"),"undefined"!=typeof TextEncoder)return new TextEncoder().encode(e);let t=new ArrayBuffer(e.length),i=new Uint8Array(t);for(let t=0;t<e.length;t++)i[t]=e.charCodeAt(t);return i}(e),i=await crypto.subtle.digest("SHA-256",t),n=Array.from(new Uint8Array(i));return n.map(e=>e.toString(16).padStart(2,"0")).join("")}class T extends y.ay{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}async function k(e){let t=await A()._get(S(e));return t&&await A()._remove(S(e)),t}function A(){return(0,y.az)(y.b)}function S(e){return(0,y.aA)("authEvent",e.config.apiKey,e.name)}function R(e){if(!(null==e?void 0:e.includes("?")))return{};let[t,...i]=e.split("?");return(0,h.zd)(i.join("?"))}let C=class{constructor(){this._redirectPersistence=y.a,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=y.aB,this._overrideRedirectResult=y.aC}async _initialize(e){let t=e._key(),i=this.eventManagers.get(t);return i||(i=new T(e),this.eventManagers.set(t,i),this.attachCallbackListeners(e,i)),i}_openPopup(e){(0,y.as)(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,i,n){!function(e){var t,i,n,r,s,o,a,l,u,h;let c=_();(0,y.ax)("function"==typeof(null===(t=null==c?void 0:c.universalLinks)||void 0===t?void 0:t.subscribe),e,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),(0,y.ax)(void 0!==(null===(i=null==c?void 0:c.BuildInfo)||void 0===i?void 0:i.packageName),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),(0,y.ax)("function"==typeof(null===(s=null===(r=null===(n=null==c?void 0:c.cordova)||void 0===n?void 0:n.plugins)||void 0===r?void 0:r.browsertab)||void 0===s?void 0:s.openUrl),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),(0,y.ax)("function"==typeof(null===(l=null===(a=null===(o=null==c?void 0:c.cordova)||void 0===o?void 0:o.plugins)||void 0===a?void 0:a.browsertab)||void 0===l?void 0:l.isAvailable),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),(0,y.ax)("function"==typeof(null===(h=null===(u=null==c?void 0:c.cordova)||void 0===u?void 0:u.InAppBrowser)||void 0===h?void 0:h.open),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}(e);let r=await this._initialize(e);await r.initialized(),r.resetRedirect(),(0,y.aD)(),await this._originValidation(e);let s=function(e,t,i=null){return{type:t,eventId:i,urlResponse:null,sessionId:function(){let e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let i=0;i<20;i++){let i=Math.floor(Math.random()*t.length);e.push(t.charAt(i))}return e.join("")}(),postBody:null,tenantId:e.tenantId,error:(0,y.aw)(e,"no-auth-event")}}(e,i,n);await A()._set(S(e),s);let o=await w(e,s,t),a=await function(e){let{cordova:t}=_();return new Promise(i=>{t.plugins.browsertab.isAvailable(n=>{let r=null;n?t.plugins.browsertab.openUrl(e):r=t.InAppBrowser.open(e,(0,y.av)()?"_blank":"_system","location=yes"),i(r)})})}(o);return b(e,r,a)}_isIframeWebStorageSupported(e,t){throw Error("Method not implemented.")}_originValidation(e){let t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=I(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){let{universalLinks:i,handleOpenURL:n,BuildInfo:r}=_(),s=setTimeout(async()=>{await k(e),t.onEvent(O())},500),o=async i=>{clearTimeout(s);let n=await k(e),r=null;n&&(null==i?void 0:i.url)&&(r=function(e,t){var i,n;let r=function(e){let t=R(e),i=t.link?decodeURIComponent(t.link):void 0,n=R(i).link,r=t.deep_link_id?decodeURIComponent(t.deep_link_id):void 0,s=R(r).link;return s||r||n||i||e}(t);if(r.includes("/__/auth/callback")){let t=R(r),s=t.firebaseError?function(e){try{return JSON.parse(e)}catch(e){return null}}(decodeURIComponent(t.firebaseError)):null,o=null===(n=null===(i=null==s?void 0:s.code)||void 0===i?void 0:i.split("auth/"))||void 0===n?void 0:n[1],a=o?(0,y.aw)(o):null;return a?{type:e.type,eventId:e.eventId,tenantId:e.tenantId,error:a,urlResponse:null,sessionId:null,postBody:null}:{type:e.type,eventId:e.eventId,tenantId:e.tenantId,sessionId:e.sessionId,urlResponse:r,postBody:null}}return null}(n,i.url)),t.onEvent(r||O())};void 0!==i&&"function"==typeof i.subscribe&&i.subscribe(null,o);let a=`${r.packageName.toLowerCase()}://`;_().handleOpenURL=async e=>{if(e.toLowerCase().startsWith(a)&&o({url:e}),"function"==typeof n)try{n(e)}catch(e){console.error(e)}}}};function O(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:(0,y.aw)("no-auth-event")}}function N(){var e;return(null===(e=null==self?void 0:self.location)||void 0===e?void 0:e.protocol)||null}function P(e=(0,h.z$)()){return!!(("file:"===N()||"ionic:"===N()||"capacitor:"===N())&&e.toLowerCase().match(/iphone|ipad|ipod|android/))}function L(){try{let e=self.localStorage,t=y.aI();if(e){if(e.setItem(t,"1"),e.removeItem(t),function(e=(0,h.z$)()){return(0,h.w1)()&&(null==document?void 0:document.documentMode)===11||function(e=(0,h.z$)()){return/Edge\/\d+/.test(e)}(e)}())return(0,h.hl)();return!0}}catch(e){return D()&&(0,h.hl)()}return!1}function D(){return void 0!==i.g&&"WorkerGlobalScope"in i.g&&"importScripts"in i.g}function M(){return("http:"===N()||"https:"===N()||(0,h.ru)()||P())&&!((0,h.b$)()||(0,h.UG)())&&L()&&!D()}function U(){return P()&&"undefined"!=typeof document}async function x(){return!!U()&&new Promise(e=>{let t=setTimeout(()=>{e(!1)},1e3);document.addEventListener("deviceready",()=>{clearTimeout(t),e(!0)})})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let F={LOCAL:"local",NONE:"none",SESSION:"session"},j=y.ax,V="persistence";async function z(e){await e._initializationPromise;let t=B(),i=y.aA(V,e.config.apiKey,e.name);t&&t.setItem(i,e._getPersistence())}function B(){var e;try{return(null===(e="undefined"!=typeof window?window:null)||void 0===e?void 0:e.sessionStorage)||null}catch(e){return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let H=y.ax;class W{constructor(){this.browserResolver=y.az(y.k),this.cordovaResolver=y.az(C),this.underlyingResolver=null,this._redirectPersistence=y.a,this._completeRedirectFn=y.aB,this._overrideRedirectResult=y.aC}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,i,n){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,i,n)}async _openRedirect(e,t,i,n){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,i,n)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return U()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return H(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;let e=await x();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}function $(e){let t;let{_tokenResponse:i}=e instanceof h.ZR?e.customData:e;if(!i)return null;if(!(e instanceof h.ZR)&&"temporaryProof"in i&&"phoneNumber"in i)return y.P.credentialFromResult(e);let n=i.providerId;if(!n||n===y.o.PASSWORD)return null;switch(n){case y.o.GOOGLE:t=y.Q;break;case y.o.FACEBOOK:t=y.N;break;case y.o.GITHUB:t=y.T;break;case y.o.TWITTER:t=y.W;break;default:let{oauthIdToken:r,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:l}=i;if(!s&&!o&&!r&&!a)return null;if(a){if(n.startsWith("saml."))return y.aL._create(n,a);return y.J._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:r,accessToken:s})}return new y.U(n).credential({idToken:r,accessToken:s,rawNonce:l})}return e instanceof h.ZR?t.credentialFromError(e):t.credentialFromResult(e)}function q(e,t){return t.catch(t=>{throw t instanceof h.ZR&&function(e,t){var i;let n=null===(i=t.customData)||void 0===i?void 0:i._tokenResponse;if((null==t?void 0:t.code)==="auth/multi-factor-auth-required"){let i=t;i.resolver=new K(e,y.an(e,t))}else if(n){let e=$(t),i=t;e&&(i.credential=e,i.tenantId=n.tenantId||void 0,i.email=n.email||void 0,i.phoneNumber=n.phoneNumber||void 0)}}(e,t),t}).then(e=>{let t=e.operationType,i=e.user;return{operationType:t,credential:$(e),additionalUserInfo:y.al(e),user:J.getOrCreate(i)}})}async function G(e,t){let i=await t;return{verificationId:i.verificationId,confirm:t=>q(e,i.confirm(t))}}class K{constructor(e,t){this.resolver=t,this.auth=e.wrapped()}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return q(this.auth.unwrap(),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this._delegate=e,this.multiFactor=y.ao(e)}static getOrCreate(e){return J.USER_MAP.has(e)||J.USER_MAP.set(e,new J(e)),J.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return q(this.auth,y.Z(this._delegate,e))}async linkWithPhoneNumber(e,t){return G(this.auth,y.l(this._delegate,e,t))}async linkWithPopup(e){return q(this.auth,y.d(this._delegate,e,W))}async linkWithRedirect(e){return await z(y.aE(this.auth)),y.g(this._delegate,e,W)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return q(this.auth,y._(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return G(this.auth,y.r(this._delegate,e,t))}reauthenticateWithPopup(e){return q(this.auth,y.e(this._delegate,e,W))}async reauthenticateWithRedirect(e){return await z(y.aE(this.auth)),y.h(this._delegate,e,W)}sendEmailVerification(e){return y.ab(this._delegate,e)}async unlink(e){return await y.ak(this._delegate,e),this}updateEmail(e){return y.ag(this._delegate,e)}updatePassword(e){return y.ah(this._delegate,e)}updatePhoneNumber(e){return y.u(this._delegate,e)}updateProfile(e){return y.af(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return y.ac(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}J.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let X=y.ax;class Y{constructor(e,t){if(this.app=e,t.isInitialized()){this._delegate=t.getImmediate(),this.linkUnderlyingAuth();return}let{apiKey:i}=e.options;X(i,"invalid-api-key",{appName:e.name}),X(i,"invalid-api-key",{appName:e.name});let n="undefined"!=typeof window?W:void 0;this._delegate=t.initialize({options:{persistence:function(e,t){let i=function(e,t){let i=B();if(!i)return[];let n=y.aA(V,e,t),r=i.getItem(n);switch(r){case F.NONE:return[y.L];case F.LOCAL:return[y.i,y.a];case F.SESSION:return[y.a];default:return[]}}(e,t);if("undefined"==typeof self||i.includes(y.i)||i.push(y.i),"undefined"!=typeof window)for(let e of[y.b,y.a])i.includes(e)||i.push(e);return i.includes(y.L)||i.push(y.L),i}(i,e.name),popupRedirectResolver:n}}),this._delegate._updateErrorMap(y.B),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?J.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){y.G(this._delegate,e,t)}applyActionCode(e){return y.a2(this._delegate,e)}checkActionCode(e){return y.a3(this._delegate,e)}confirmPasswordReset(e,t){return y.a1(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return q(this._delegate,y.a5(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return y.aa(this._delegate,e)}isSignInWithEmailLink(e){return y.a8(this._delegate,e)}async getRedirectResult(){X(M(),this._delegate,"operation-not-supported-in-this-environment");let e=await y.j(this._delegate,W);return e?q(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){!/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e,t){(0,y.aE)(e)._logFramework(t)}(this._delegate,e)}onAuthStateChanged(e,t,i){let{next:n,error:r,complete:s}=Z(e,t,i);return this._delegate.onAuthStateChanged(n,r,s)}onIdTokenChanged(e,t,i){let{next:n,error:r,complete:s}=Z(e,t,i);return this._delegate.onIdTokenChanged(n,r,s)}sendSignInLinkToEmail(e,t){return y.a7(this._delegate,e,t)}sendPasswordResetEmail(e,t){return y.a0(this._delegate,e,t||void 0)}async setPersistence(e){let t;switch(!function(e,t){if(j(Object.values(F).includes(t),e,"invalid-persistence-type"),(0,h.b$)()){j(t!==F.SESSION,e,"unsupported-persistence-type");return}if((0,h.UG)()){j(t===F.NONE,e,"unsupported-persistence-type");return}if(D()){j(t===F.NONE||t===F.LOCAL&&(0,h.hl)(),e,"unsupported-persistence-type");return}j(t===F.NONE||L(),e,"unsupported-persistence-type")}(this._delegate,e),e){case F.SESSION:t=y.a;break;case F.LOCAL:let i=await y.az(y.i)._isAvailable();t=i?y.i:y.b;break;case F.NONE:t=y.L;break;default:return y.as("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return q(this._delegate,y.X(this._delegate))}signInWithCredential(e){return q(this._delegate,y.Y(this._delegate,e))}signInWithCustomToken(e){return q(this._delegate,y.$(this._delegate,e))}signInWithEmailAndPassword(e,t){return q(this._delegate,y.a6(this._delegate,e,t))}signInWithEmailLink(e,t){return q(this._delegate,y.a9(this._delegate,e,t))}signInWithPhoneNumber(e,t){return G(this._delegate,y.s(this._delegate,e,t))}async signInWithPopup(e){return X(M(),this._delegate,"operation-not-supported-in-this-environment"),q(this._delegate,y.c(this._delegate,e,W))}async signInWithRedirect(e){return X(M(),this._delegate,"operation-not-supported-in-this-environment"),await z(this._delegate),y.f(this._delegate,e,W)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return y.a4(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}function Z(e,t,i){let n=e;"function"!=typeof e&&({next:n,error:t,complete:i}=e);let r=n,s=e=>r(e&&J.getOrCreate(e));return{next:s,error:t,complete:i}}Y.Persistence=F;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(){this.providerId="phone",this._delegate=new y.P(m.auth().unwrap())}static credential(e,t){return y.P.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}Q.PHONE_SIGN_IN_METHOD=y.P.PHONE_SIGN_IN_METHOD,Q.PROVIDER_ID=y.P.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ee=y.ax;m.INTERNAL.registerComponent(new c.wA("auth-compat",e=>{let t=e.getProvider("app-compat").getImmediate(),i=e.getProvider("auth");return new Y(t,i)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:y.A.EMAIL_SIGNIN,PASSWORD_RESET:y.A.PASSWORD_RESET,RECOVER_EMAIL:y.A.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:y.A.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:y.A.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:y.A.VERIFY_EMAIL}},EmailAuthProvider:y.M,FacebookAuthProvider:y.N,GithubAuthProvider:y.T,GoogleAuthProvider:y.Q,OAuthProvider:y.U,SAMLAuthProvider:y.V,PhoneAuthProvider:Q,PhoneMultiFactorGenerator:y.m,RecaptchaVerifier:class{constructor(e,t,i=m.app()){var n;ee(null===(n=i.options)||void 0===n?void 0:n.apiKey,"invalid-api-key",{appName:i.name}),this._delegate=new y.R(e,t,i.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}},TwitterAuthProvider:y.W,Auth:Y,AuthCredential:y.H,Error:h.ZR}).setInstantiationMode("LAZY").setMultipleInstances(!1)),m.registerVersion("@firebase/auth-compat","0.3.3");var et,ei="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==i.g?i.g:"undefined"!=typeof self?self:{},en={},er=er||{},es=ei||self;function eo(){}function ea(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function el(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function eu(e,t,i){return e.call.apply(e.bind,arguments)}function eh(e,t,i){if(!e)throw Error();if(2<arguments.length){var n=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,n),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function ec(e,t,i){return(ec=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?eu:eh).apply(null,arguments)}function ed(e,t){var i=Array.prototype.slice.call(arguments,1);return function(){var t=i.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function ef(e,t){function i(){}i.prototype=t.prototype,e.X=t.prototype,e.prototype=new i,e.prototype.constructor=e,e.Wb=function(e,i,n){for(var r=Array(arguments.length-2),s=2;s<arguments.length;s++)r[s-2]=arguments[s];return t.prototype[i].apply(e,r)}}function ep(){this.s=this.s,this.o=this.o}ep.prototype.s=!1,ep.prototype.na=function(){this.s||(this.s=!0,this.M())},ep.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};let eg=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let i=0;i<e.length;i++)if(i in e&&e[i]===t)return i;return -1};function em(e){let t=e.length;if(0<t){let i=Array(t);for(let n=0;n<t;n++)i[n]=e[n];return i}return[]}function ev(e,t){for(let t=1;t<arguments.length;t++){let i=arguments[t];if(ea(i)){let t=e.length||0,n=i.length||0;e.length=t+n;for(let r=0;r<n;r++)e[t+r]=i[r]}else e.push(i)}}function ey(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}ey.prototype.h=function(){this.defaultPrevented=!0};var e_=function(){if(!es.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{es.addEventListener("test",eo,t),es.removeEventListener("test",eo,t)}catch(e){}return e}();function ew(e){return/^[\s\xa0]*$/.test(e)}var eI=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function eb(e,t){return e<t?-1:e>t?1:0}function eE(){var e=es.navigator;return e&&(e=e.userAgent)?e:""}function eT(e){return -1!=eE().indexOf(e)}function ek(e){return ek[" "](e),e}ek[" "]=eo;var eA=eT("Opera"),eS=eT("Trident")||eT("MSIE"),eR=eT("Edge"),eC=eR||eS,eO=eT("Gecko")&&!(-1!=eE().toLowerCase().indexOf("webkit")&&!eT("Edge"))&&!(eT("Trident")||eT("MSIE"))&&!eT("Edge"),eN=-1!=eE().toLowerCase().indexOf("webkit")&&!eT("Edge");function eP(){var e=es.document;return e?e.documentMode:void 0}e:{var eL,eD="",eM=(eL=eE(),eO?/rv:([^\);]+)(\)|;)/.exec(eL):eR?/Edge\/([\d\.]+)/.exec(eL):eS?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(eL):eN?/WebKit\/(\S+)/.exec(eL):eA?/(?:Version)[ \/]?(\S+)/.exec(eL):void 0);if(eM&&(eD=eM?eM[1]:""),eS){var eU=eP();if(null!=eU&&eU>parseFloat(eD)){r=String(eU);break e}}r=eD}var ex={},eF=es.document&&eS&&(eP()||parseInt(r,10))||void 0;function ej(e,t){if(ey.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var i=this.type=e.type,n=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(eO){e:{try{ek(t.nodeName);var r=!0;break e}catch(e){}r=!1}r||(t=null)}}else"mouseover"==i?t=e.fromElement:"mouseout"==i&&(t=e.toElement);this.relatedTarget=t,n?(this.clientX=void 0!==n.clientX?n.clientX:n.pageX,this.clientY=void 0!==n.clientY?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:eV[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&ej.X.h.call(this)}}ef(ej,ey);var eV={2:"touch",3:"pen",4:"mouse"};ej.prototype.h=function(){ej.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var ez="closure_listenable_"+(1e6*Math.random()|0),eB=0;function eH(e,t,i,n,r){this.listener=e,this.proxy=null,this.src=t,this.type=i,this.capture=!!n,this.ha=r,this.key=++eB,this.ba=this.ea=!1}function eW(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function e$(e,t,i){for(let n in e)t.call(i,e[n],n,e)}function eq(e){let t={};for(let i in e)t[i]=e[i];return t}let eG="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function eK(e,t){let i,n;for(let t=1;t<arguments.length;t++){for(i in n=arguments[t])e[i]=n[i];for(let t=0;t<eG.length;t++)i=eG[t],Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}}function eJ(e){this.src=e,this.g={},this.h=0}function eX(e,t){var i=t.type;if(i in e.g){var n,r=e.g[i],s=eg(r,t);(n=0<=s)&&Array.prototype.splice.call(r,s,1),n&&(eW(t),0==e.g[i].length&&(delete e.g[i],e.h--))}}function eY(e,t,i,n){for(var r=0;r<e.length;++r){var s=e[r];if(!s.ba&&s.listener==t&&!!i==s.capture&&s.ha==n)return r}return -1}eJ.prototype.add=function(e,t,i,n,r){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var o=eY(e,t,n,r);return -1<o?(t=e[o],i||(t.ea=!1)):((t=new eH(t,this.src,s,!!n,r)).ea=i,e.push(t)),t};var eZ="closure_lm_"+(1e6*Math.random()|0),eQ={};function e0(e,t,i,n,r,s){if(!t)throw Error("Invalid event type");var o=el(r)?!!r.capture:!!r,a=e4(e);if(a||(e[eZ]=a=new eJ(e)),(i=a.add(t,i,n,o,s)).proxy)return i;if(n=function e(t){return e3.call(e.src,e.listener,t)},i.proxy=n,n.src=e,n.listener=i,e.addEventListener)e_||(r=o),void 0===r&&(r=!1),e.addEventListener(t.toString(),n,r);else if(e.attachEvent)e.attachEvent(e2(t.toString()),n);else if(e.addListener&&e.removeListener)e.addListener(n);else throw Error("addEventListener and attachEvent are unavailable.");return i}function e1(e){if("number"!=typeof e&&e&&!e.ba){var t=e.src;if(t&&t[ez])eX(t.i,e);else{var i=e.type,n=e.proxy;t.removeEventListener?t.removeEventListener(i,n,e.capture):t.detachEvent?t.detachEvent(e2(i),n):t.addListener&&t.removeListener&&t.removeListener(n),(i=e4(t))?(eX(i,e),0==i.h&&(i.src=null,t[eZ]=null)):eW(e)}}}function e2(e){return e in eQ?eQ[e]:eQ[e]="on"+e}function e3(e,t){if(e.ba)e=!0;else{t=new ej(t,this);var i=e.listener,n=e.ha||e.src;e.ea&&e1(e),e=i.call(n,t)}return e}function e4(e){return(e=e[eZ])instanceof eJ?e:null}var e6="__closure_events_fn_"+(1e9*Math.random()>>>0);function e5(e){return"function"==typeof e?e:(e[e6]||(e[e6]=function(t){return e.handleEvent(t)}),e[e6])}function e9(){ep.call(this),this.i=new eJ(this),this.P=this,this.I=null}function e8(e,t){var i,n=e.I;if(n)for(i=[];n;n=n.I)i.push(n);if(e=e.P,n=t.type||t,"string"==typeof t)t=new ey(t,e);else if(t instanceof ey)t.target=t.target||e;else{var r=t;eK(t=new ey(n,e),r)}if(r=!0,i)for(var s=i.length-1;0<=s;s--){var o=t.g=i[s];r=e7(o,n,!0,t)&&r}if(r=e7(o=t.g=e,n,!0,t)&&r,r=e7(o,n,!1,t)&&r,i)for(s=0;s<i.length;s++)r=e7(o=t.g=i[s],n,!1,t)&&r}function e7(e,t,i,n){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var r=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.ba&&o.capture==i){var a=o.listener,l=o.ha||o.src;o.ea&&eX(e.i,o),r=!1!==a.call(l,n)&&r}}return r&&!n.defaultPrevented}ef(e9,ep),e9.prototype[ez]=!0,e9.prototype.removeEventListener=function(e,t,i,n){!function e(t,i,n,r,s){if(Array.isArray(i))for(var o=0;o<i.length;o++)e(t,i[o],n,r,s);else(r=el(r)?!!r.capture:!!r,n=e5(n),t&&t[ez])?(t=t.i,(i=String(i).toString())in t.g&&-1<(n=eY(o=t.g[i],n,r,s))&&(eW(o[n]),Array.prototype.splice.call(o,n,1),0==o.length&&(delete t.g[i],t.h--))):t&&(t=e4(t))&&(i=t.g[i.toString()],t=-1,i&&(t=eY(i,n,r,s)),(n=-1<t?i[t]:null)&&e1(n))}(this,e,t,i,n)},e9.prototype.M=function(){if(e9.X.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var i=t.g[e],n=0;n<i.length;n++)eW(i[n]);delete t.g[e],t.h--}}this.I=null},e9.prototype.N=function(e,t,i,n){return this.i.add(String(e),t,!1,i,n)},e9.prototype.O=function(e,t,i,n){return this.i.add(String(e),t,!0,i,n)};var te=es.JSON.stringify,tt=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new ti,e=>e.reset());class ti{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function tn(e,t){var i;o||(i=es.Promise.resolve(void 0),o=function(){i.then(to)}),tr||(o(),tr=!0),ts.add(e,t)}var tr=!1,ts=new class{constructor(){this.h=this.g=null}add(e,t){let i=tt.get();i.set(e,t),this.h?this.h.next=i:this.g=i,this.h=i}};function to(){let e;for(;e=null,(t=ts).g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),i=e;){try{i.h.call(i.g)}catch(e){!function(e){es.setTimeout(()=>{throw e},0)}(e)}var t,i,n=tt;n.j(i),100>n.h&&(n.h++,i.next=n.g,n.g=i)}tr=!1}function ta(e,t){e9.call(this),this.h=e||1,this.g=t||es,this.j=ec(this.lb,this),this.l=Date.now()}function tl(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}function tu(e,t,i){if("function"==typeof e)i&&(e=ec(e,i));else if(e&&"function"==typeof e.handleEvent)e=ec(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:es.setTimeout(e,t||0)}ef(ta,e9),(et=ta.prototype).ca=!1,et.R=null,et.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),e8(this,"tick"),this.ca&&(tl(this),this.start()))}},et.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},et.M=function(){ta.X.M.call(this),tl(this),delete this.g};class th extends ep{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:function e(t){t.g=tu(()=>{t.g=null,t.i&&(t.i=!1,e(t))},t.j);let i=t.h;t.h=null,t.m.apply(null,i)}(this)}M(){super.M(),this.g&&(es.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function tc(e){ep.call(this),this.h=e,this.g={}}ef(tc,ep);var td=[];function tf(e,t,i,n){Array.isArray(i)||(i&&(td[0]=i.toString()),i=td);for(var r=0;r<i.length;r++){var s=function e(t,i,n,r,s){if(r&&r.once)return function e(t,i,n,r,s){if(Array.isArray(i)){for(var o=0;o<i.length;o++)e(t,i[o],n,r,s);return null}return n=e5(n),t&&t[ez]?t.O(i,n,el(r)?!!r.capture:!!r,s):e0(t,i,n,!0,r,s)}(t,i,n,r,s);if(Array.isArray(i)){for(var o=0;o<i.length;o++)e(t,i[o],n,r,s);return null}return n=e5(n),t&&t[ez]?t.N(i,n,el(r)?!!r.capture:!!r,s):e0(t,i,n,!1,r,s)}(t,i[r],n||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function tp(e){e$(e.g,function(e,t){this.g.hasOwnProperty(t)&&e1(e)},e),e.g={}}function tg(){this.g=!0}function tm(e,t,i,n){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var i=JSON.parse(t);if(i){for(e=0;e<i.length;e++)if(Array.isArray(i[e])){var n=i[e];if(!(2>n.length)){var r=n[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<r.length;o++)r[o]=""}}}}return te(i)}catch(e){return t}}(e,i)+(n?" "+n:"")})}tc.prototype.M=function(){tc.X.M.call(this),tp(this)},tc.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},tg.prototype.Aa=function(){this.g=!1},tg.prototype.info=function(){};var tv={},ty=null;function t_(){return ty=ty||new e9}function tw(e){ey.call(this,tv.Pa,e)}function tI(e){let t=t_();e8(t,new tw(t))}function tb(e,t){ey.call(this,tv.STAT_EVENT,e),this.stat=t}function tE(e){let t=t_();e8(t,new tb(t,e))}function tT(e,t){ey.call(this,tv.Qa,e),this.size=t}function tk(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return es.setTimeout(function(){e()},t)}tv.Pa="serverreachability",ef(tw,ey),tv.STAT_EVENT="statevent",ef(tb,ey),tv.Qa="timingevent",ef(tT,ey);var tA={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},tS={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function tR(){}function tC(e){return e.h||(e.h=e.i())}function tO(){}tR.prototype.h=null;var tN={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function tP(){ey.call(this,"d")}function tL(){ey.call(this,"c")}function tD(){}function tM(e,t,i,n){this.l=e,this.j=t,this.m=i,this.U=n||1,this.S=new tc(this),this.O=tx,e=eC?125:void 0,this.T=new ta(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new tU}function tU(){this.i=null,this.g="",this.h=!1}ef(tP,ey),ef(tL,ey),ef(tD,tR),tD.prototype.g=function(){return new XMLHttpRequest},tD.prototype.i=function(){return{}},a=new tD;var tx=45e3,tF={},tj={};function tV(e,t,i){e.K=1,e.v=t4(tQ(t)),e.s=i,e.P=!0,tz(e,null)}function tz(e,t){e.F=Date.now(),tW(e),e.A=tQ(e.v);var i=e.A,n=e.U;Array.isArray(n)||(n=[String(n)]),il(i.i,"t",n),e.C=0,i=e.l.H,e.h=new tU,e.g=i8(e.l,i?t:null,!e.s),0<e.N&&(e.L=new th(ec(e.La,e,e.g),e.N)),tf(e.S,e.g,"readystatechange",e.ib),t=e.H?eq(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),tI(),function(e,t,i,n,r,s){e.info(function(){if(e.g){if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var h=u[0];u=u[1];var c=h.split("_");o=2<=c.length&&"type"==c[1]?o+(h+"=")+u+"&":o+(h+"=redacted&")}}else o=null}else o=s;return"XMLHTTP REQ ("+n+") [attempt "+r+"]: "+t+"\n"+i+"\n"+o})}(e.j,e.u,e.A,e.m,e.U,e.s)}function tB(e){return!!e.g&&"GET"==e.u&&2!=e.K&&e.l.Da}function tH(e,t,i){let n=!0,r;for(;!e.I&&e.C<i.length;)if((r=function(e,t){var i=e.C,n=t.indexOf("\n",i);return -1==n?tj:isNaN(i=Number(t.substring(i,n)))?tF:(n+=1)+i>t.length?tj:(t=t.substr(n,i),e.C=n+i,t)}(e,i))==tj){4==t&&(e.o=4,tE(14),n=!1),tm(e.j,e.m,null,"[Incomplete Response]");break}else if(r==tF){e.o=4,tE(15),tm(e.j,e.m,i,"[Invalid Chunk]"),n=!1;break}else tm(e.j,e.m,r,null),tJ(e,r);tB(e)&&r!=tj&&r!=tF&&(e.h.g="",e.C=0),4!=t||0!=i.length||e.h.h||(e.o=1,tE(16),n=!1),e.i=e.i&&n,n?0<i.length&&!e.$&&(e.$=!0,(t=e.l).g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+i.length),i0(t),t.K=!0,tE(11))):(tm(e.j,e.m,i,"[Invalid Chunked Response]"),tK(e),tG(e))}function tW(e){e.V=Date.now()+e.O,t$(e,e.O)}function t$(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=tk(ec(e.gb,e),t)}function tq(e){e.B&&(es.clearTimeout(e.B),e.B=null)}function tG(e){0==e.l.G||e.I||i3(e.l,e)}function tK(e){tq(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,tl(e.T),tp(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function tJ(e,t){try{var i=e.l;if(0!=i.G&&(i.g==e||im(i.h,e))){if(!e.J&&im(i.h,e)&&3==i.G){try{var n=i.Fa.g.parse(t)}catch(e){n=null}if(Array.isArray(n)&&3==n.length){var r=n;if(0==r[0]){e:if(!i.u){if(i.g){if(i.g.F+3e3<e.F)i2(i),iq(i);else break e}iQ(i),tE(18)}}else i.Ba=r[1],0<i.Ba-i.T&&37500>r[2]&&i.L&&0==i.A&&!i.v&&(i.v=tk(ec(i.cb,i),6e3));if(1>=ig(i.h)&&i.ja){try{i.ja()}catch(e){}i.ja=void 0}}else i6(i,11)}else if((e.J||i.g==e)&&i2(i),!ew(t))for(r=i.Fa.g.parse(t),t=0;t<r.length;t++){let a=r[t];if(i.T=a[0],a=a[1],2==i.G){if("c"==a[0]){i.I=a[1],i.ka=a[2];let t=a[3];null!=t&&(i.ma=t,i.j.info("VER="+i.ma));let r=a[4];null!=r&&(i.Ca=r,i.j.info("SVER="+i.Ca));let l=a[5];null!=l&&"number"==typeof l&&0<l&&(n=1.5*l,i.J=n,i.j.info("backChannelRequestTimeoutMs_="+n)),n=i;let u=e.g;if(u){let e=u.g?u.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=n.h;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(iv(s,s.h),s.h=null))}if(n.D){let e=u.g?u.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(n.za=e,t3(n.F,n.D,e))}}if(i.G=3,i.l&&i.l.xa(),i.$&&(i.P=Date.now()-e.F,i.j.info("Handshake RTT: "+i.P+"ms")),(n=i).sa=i9(n,n.H?n.ka:null,n.V),e.J){iy(n.h,e);var o=n.J;o&&e.setTimeout(o),e.B&&(tq(e),tW(e)),n.g=e}else iZ(n);0<i.i.length&&iK(i)}else"stop"!=a[0]&&"close"!=a[0]||i6(i,7)}else 3==i.G&&("stop"==a[0]||"close"==a[0]?"stop"==a[0]?i6(i,7):i$(i):"noop"!=a[0]&&i.l&&i.l.wa(a),i.A=0)}}tI(4)}catch(e){}}function tX(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(ea(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var i=function(e){if(e.oa&&"function"==typeof e.oa)return e.oa();if(!e.W||"function"!=typeof e.W){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(ea(e)||"string"==typeof e){var t=[];e=e.length;for(var i=0;i<e;i++)t.push(i);return t}for(let n in t=[],i=0,e)t[i++]=n;return t}}}(e),n=function(e){if(e.W&&"function"==typeof e.W)return e.W();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(ea(e)){for(var t=[],i=e.length,n=0;n<i;n++)t.push(e[n]);return t}for(n in t=[],i=0,e)t[i++]=e[n];return t}(e),r=n.length,s=0;s<r;s++)t.call(void 0,n[s],i&&i[s],e)}(et=tM.prototype).setTimeout=function(e){this.O=e},et.ib=function(e){e=e.target;let t=this.L;t&&3==ij(e)?t.l():this.La(e)},et.La=function(e){try{if(e==this.g)e:{let h=ij(this.g);var t=this.g.Ea();let c=this.g.aa();if(!(3>h)&&(3!=h||eC||this.g&&(this.h.h||this.g.fa()||iV(this.g)))){this.I||4!=h||7==t||(8==t||0>=c?tI(3):tI(2)),tq(this);var i=this.g.aa();this.Y=i;t:if(tB(this)){var n=iV(this.g);e="";var r=n.length,s=4==ij(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){tK(this),tG(this);var o="";break t}this.h.i=new es.TextDecoder}for(t=0;t<r;t++)this.h.h=!0,e+=this.h.i.decode(n[t],{stream:s&&t==r-1});n.splice(0,r),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=200==i,function(e,t,i,n,r,s,o){e.info(function(){return"XMLHTTP RESP ("+n+") [ attempt "+r+"]: "+t+"\n"+i+"\n"+s+" "+o})}(this.j,this.u,this.A,this.m,this.U,h,i),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ew(a)){var u=a;break t}}u=null}if(i=u)tm(this.j,this.m,i,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,tJ(this,i);else{this.i=!1,this.o=3,tE(12),tK(this),tG(this);break e}}this.P?(tH(this,h,o),eC&&this.i&&3==h&&(tf(this.S,this.T,"tick",this.hb),this.T.start())):(tm(this.j,this.m,o,null),tJ(this,o)),4==h&&tK(this),this.i&&!this.I&&(4==h?i3(this.l,this):(this.i=!1,tW(this)))}else 400==i&&0<o.indexOf("Unknown SID")?(this.o=3,tE(12)):(this.o=0,tE(13)),tK(this),tG(this)}}}catch(e){}finally{}},et.hb=function(){if(this.g){var e=ij(this.g),t=this.g.fa();this.C<t.length&&(tq(this),tH(this,e,t),this.i&&4!=e&&tW(this))}},et.cancel=function(){this.I=!0,tK(this)},et.gb=function(){this.B=null;let e=Date.now();0<=e-this.V?(function(e,t){e.info(function(){return"TIMEOUT: "+t})}(this.j,this.A),2!=this.K&&(tI(),tE(17)),tK(this),this.o=2,tG(this)):t$(this,this.V-e)};var tY=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function tZ(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof tZ){this.h=void 0!==t?t:e.h,t0(this,e.j),this.s=e.s,this.g=e.g,t1(this,e.m),this.l=e.l,t=e.i;var i=new ir;i.i=t.i,t.g&&(i.g=new Map(t.g),i.h=t.h),t2(this,i),this.o=e.o}else e&&(i=String(e).match(tY))?(this.h=!!t,t0(this,i[1]||"",!0),this.s=t6(i[2]||""),this.g=t6(i[3]||"",!0),t1(this,i[4]),this.l=t6(i[5]||"",!0),t2(this,i[6]||"",!0),this.o=t6(i[7]||"")):(this.h=!!t,this.i=new ir(null,this.h))}function tQ(e){return new tZ(e)}function t0(e,t,i){e.j=i?t6(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function t1(e,t){if(t){if(isNaN(t=Number(t))||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function t2(e,t,i){var n,r;t instanceof ir?(e.i=t,n=e.i,(r=e.h)&&!n.j&&(is(n),n.i=null,n.g.forEach(function(e,t){var i=t.toLowerCase();t!=i&&(io(this,t),il(this,i,e))},n)),n.j=r):(i||(t=t5(t,it)),e.i=new ir(t,e.h))}function t3(e,t,i){e.i.set(t,i)}function t4(e){return t3(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function t6(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function t5(e,t,i){return"string"==typeof e?(e=encodeURI(e).replace(t,t9),i&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function t9(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}tZ.prototype.toString=function(){var e=[],t=this.j;t&&e.push(t5(t,t8,!0),":");var i=this.g;return(i||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(t5(t,t8,!0),"@"),e.push(encodeURIComponent(String(i)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(i=this.m)&&e.push(":",String(i))),(i=this.l)&&(this.g&&"/"!=i.charAt(0)&&e.push("/"),e.push(t5(i,"/"==i.charAt(0)?ie:t7,!0))),(i=this.i.toString())&&e.push("?",i),(i=this.o)&&e.push("#",t5(i,ii)),e.join("")};var t8=/[#\/\?@]/g,t7=/[#\?:]/g,ie=/[#\?]/g,it=/[#\?@]/g,ii=/#/g;function ir(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function is(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var i=0;i<e.length;i++){var n=e[i].indexOf("="),r=null;if(0<=n){var s=e[i].substring(0,n);r=e[i].substring(n+1)}else s=e[i];t(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}(e.i,function(t,i){e.add(decodeURIComponent(t.replace(/\+/g," ")),i)}))}function io(e,t){is(e),t=iu(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function ia(e,t){return is(e),t=iu(e,t),e.g.has(t)}function il(e,t,i){io(e,t),0<i.length&&(e.i=null,e.g.set(iu(e,t),em(i)),e.h+=i.length)}function iu(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(et=ir.prototype).add=function(e,t){is(this),this.i=null,e=iu(this,e);var i=this.g.get(e);return i||this.g.set(e,i=[]),i.push(t),this.h+=1,this},et.forEach=function(e,t){is(this),this.g.forEach(function(i,n){i.forEach(function(i){e.call(t,i,n,this)},this)},this)},et.oa=function(){is(this);let e=Array.from(this.g.values()),t=Array.from(this.g.keys()),i=[];for(let n=0;n<t.length;n++){let r=e[n];for(let e=0;e<r.length;e++)i.push(t[n])}return i},et.W=function(e){is(this);let t=[];if("string"==typeof e)ia(this,e)&&(t=t.concat(this.g.get(iu(this,e))));else{e=Array.from(this.g.values());for(let i=0;i<e.length;i++)t=t.concat(e[i])}return t},et.set=function(e,t){return is(this),this.i=null,ia(this,e=iu(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},et.get=function(e,t){return e&&0<(e=this.W(e)).length?String(e[0]):t},et.toString=function(){if(this.i)return this.i;if(!this.g)return"";let e=[],t=Array.from(this.g.keys());for(var i=0;i<t.length;i++){var n=t[i];let s=encodeURIComponent(String(n)),o=this.W(n);for(n=0;n<o.length;n++){var r=s;""!==o[n]&&(r+="="+encodeURIComponent(String(o[n]))),e.push(r)}}return this.i=e.join("&")};var ih=class{constructor(e,t){this.h=e,this.g=t}};function ic(e){this.l=e||id,e=es.PerformanceNavigationTiming?0<(e=es.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):!!(es.g&&es.g.Ga&&es.g.Ga()&&es.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var id=10;function ip(e){return!!e.h||!!e.g&&e.g.size>=e.j}function ig(e){return e.h?1:e.g?e.g.size:0}function im(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function iv(e,t){e.g?e.g.add(t):e.h=t}function iy(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function i_(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(let i of e.g.values())t=t.concat(i.D);return t}return em(e.i)}function iw(){}function iI(){this.g=new iw}function ib(e,t,i,n,r){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,r(n)}catch(e){}}function iE(e){this.l=e.ac||null,this.j=e.jb||!1}function iT(e,t){e9.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=ik,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ic.prototype.cancel=function(){if(this.i=i_(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(let e of this.g.values())e.cancel();this.g.clear()}},iw.prototype.stringify=function(e){return es.JSON.stringify(e,void 0)},iw.prototype.parse=function(e){return es.JSON.parse(e,void 0)},ef(iE,tR),iE.prototype.g=function(){return new iT(this.l,this.j)},iE.prototype.i=(n={},function(){return n}),ef(iT,e9);var ik=0;function iA(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}function iS(e){e.readyState=4,e.l=null,e.j=null,e.A=null,iR(e)}function iR(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(et=iT.prototype).open=function(e,t){if(this.readyState!=ik)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,iR(this)},et.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;let t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||es).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))},et.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,iS(this)),this.readyState=ik},et.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,iR(this)),this.g&&(this.readyState=3,iR(this),this.g))){if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(void 0!==es.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;iA(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))}},et.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?iS(this):iR(this),3==this.readyState&&iA(this)}},et.Va=function(e){this.g&&(this.response=this.responseText=e,iS(this))},et.Ua=function(e){this.g&&(this.response=e,iS(this))},et.ga=function(){this.g&&iS(this)},et.setRequestHeader=function(e,t){this.v.append(e,t)},et.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},et.getAllResponseHeaders=function(){if(!this.h)return"";let e=[],t=this.h.entries();for(var i=t.next();!i.done;)e.push((i=i.value)[0]+": "+i[1]),i=t.next();return e.join("\r\n")},Object.defineProperty(iT.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var iC=es.JSON.parse;function iO(e){e9.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=iN,this.K=this.L=!1}ef(iO,e9);var iN="",iP=/^https?$/i,iL=["POST","PUT"];function iD(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,iM(e),ix(e)}function iM(e){e.D||(e.D=!0,e8(e,"complete"),e8(e,"error"))}function iU(e){if(e.h&&void 0!==er&&(!e.C[1]||4!=ij(e)||2!=e.aa())){if(e.v&&4==ij(e))tu(e.Ha,0,e);else if(e8(e,"readystatechange"),4==ij(e)){e.h=!1;try{let a=e.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t,i,n=!0;break e;default:n=!1}if(!(t=n)){if(i=0===a){var r=String(e.H).match(tY)[1]||null;if(!r&&es.self&&es.self.location){var s=es.self.location.protocol;r=s.substr(0,s.length-1)}i=!iP.test(r?r.toLowerCase():"")}t=i}if(t)e8(e,"complete"),e8(e,"success");else{e.m=6;try{var o=2<ij(e)?e.g.statusText:""}catch(e){o=""}e.j=o+" ["+e.aa()+"]",iM(e)}}finally{ix(e)}}}}function ix(e,t){if(e.g){iF(e);let i=e.g,n=e.C[0]?eo:null;e.g=null,e.C=null,t||e8(e,"ready");try{i.onreadystatechange=n}catch(e){}}}function iF(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(es.clearTimeout(e.A),e.A=null)}function ij(e){return e.g?e.g.readyState:0}function iV(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case iN:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function iz(e){let t="";return e$(e,function(e,i){t+=i+":"+e+"\r\n"}),t}function iB(e,t,i){e:{for(n in i){var n=!1;break e}n=!0}n||(i=iz(i),"string"==typeof e?null!=i&&encodeURIComponent(String(i)):t3(e,t,i))}function iH(e,t,i){return i&&i.internalChannelParams&&i.internalChannelParams[e]||t}function iW(e){this.Ca=0,this.i=[],this.j=new tg,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=iH("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=iH("baseRetryDelayMs",5e3,e),this.bb=iH("retryDelaySeedMs",1e4,e),this.$a=iH("forwardChannelMaxRetries",2,e),this.ta=iH("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new ic(e&&e.concurrentRequestLimit),this.Fa=new iI,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function i$(e){if(iG(e),3==e.G){var t=e.U++,i=tQ(e.F);t3(i,"SID",e.I),t3(i,"RID",t),t3(i,"TYPE","terminate"),iX(e,i),(t=new tM(e,e.j,t,void 0)).K=2,t.v=t4(tQ(i)),i=!1,es.navigator&&es.navigator.sendBeacon&&(i=es.navigator.sendBeacon(t.v.toString(),"")),!i&&es.Image&&((new Image).src=t.v,i=!0),i||(t.g=i8(t.l,null),t.g.da(t.v)),t.F=Date.now(),tW(t)}i5(e)}function iq(e){e.g&&(i0(e),e.g.cancel(),e.g=null)}function iG(e){iq(e),e.u&&(es.clearTimeout(e.u),e.u=null),i2(e),e.h.cancel(),e.m&&("number"==typeof e.m&&es.clearTimeout(e.m),e.m=null)}function iK(e){ip(e.h)||e.m||(e.m=!0,tn(e.Ja,e),e.C=0)}function iJ(e,t){var i;i=t?t.m:e.U++;let n=tQ(e.F);t3(n,"SID",e.I),t3(n,"RID",i),t3(n,"AID",e.T),iX(e,n),e.o&&e.s&&iB(n,e.o,e.s),i=new tM(e,e.j,i,e.C+1),null===e.o&&(i.H=e.s),t&&(e.i=t.D.concat(e.i)),t=iY(e,i,1e3),i.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),iv(e.h,i),tV(i,n,t)}function iX(e,t){e.ia&&e$(e.ia,function(e,i){t3(t,i,e)}),e.l&&tX({},function(e,i){t3(t,i,e)})}function iY(e,t,i){i=Math.min(e.i.length,i);var n=e.l?ec(e.l.Ra,e.l,e):null;e:{var r=e.i;let t=-1;for(;;){let e=["count="+i];-1==t?0<i?(t=r[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let o=0;o<i;o++){let i=r[o].h,a=r[o].g;if(0>(i-=t))t=Math.max(0,r[o].h-100),s=!1;else try{!function(e,t,i){let n=i||"";try{tX(e,function(e,i){let r=e;el(e)&&(r=te(e)),t.push(n+i+"="+encodeURIComponent(r))})}catch(e){throw t.push(n+"type="+encodeURIComponent("_badmap")),e}}(a,e,"req"+i+"_")}catch(e){n&&n(a)}}if(s){n=e.join("&");break e}}}return e=e.i.splice(0,i),t.D=e,n}function iZ(e){e.g||e.u||(e.Z=1,tn(e.Ia,e),e.A=0)}function iQ(e){return!e.g&&!e.u&&!(3<=e.A)&&(e.Z++,e.u=tk(ec(e.Ia,e),i4(e,e.A)),e.A++,!0)}function i0(e){null!=e.B&&(es.clearTimeout(e.B),e.B=null)}function i1(e){e.g=new tM(e,e.j,"rpc",e.Z),null===e.o&&(e.g.H=e.s),e.g.N=0;var t=tQ(e.sa);t3(t,"RID","rpc"),t3(t,"SID",e.I),t3(t,"CI",e.L?"0":"1"),t3(t,"AID",e.T),t3(t,"TYPE","xmlhttp"),iX(e,t),e.o&&e.s&&iB(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var i=e.g;e=e.ka,i.K=1,i.v=t4(tQ(t)),i.s=null,i.P=!0,tz(i,e)}function i2(e){null!=e.v&&(es.clearTimeout(e.v),e.v=null)}function i3(e,t){var i=null;if(e.g==t){i2(e),i0(e),e.g=null;var n=2}else{if(!im(e.h,t))return;i=t.D,iy(e.h,t),n=1}if(0!=e.G){if(e.pa=t.Y,t.i){if(1==n){i=t.s?t.s.length:0,t=Date.now()-t.F;var r,s,o=e.C;e8(n=t_(),new tT(n,i)),iK(e)}else iZ(e)}else if(3==(o=t.o)||0==o&&0<e.pa||!(1==n&&(r=e,s=t,!(ig(r.h)>=r.h.j-(r.m?1:0))&&(r.m?(r.i=s.D.concat(r.i),!0):1!=r.G&&2!=r.G&&!(r.C>=(r.Za?0:r.$a))&&(r.m=tk(ec(r.Ja,r,s),i4(r,r.C)),r.C++,!0)))||2==n&&iQ(e)))switch(i&&0<i.length&&((t=e.h).i=t.i.concat(i)),o){case 1:i6(e,5);break;case 4:i6(e,10);break;case 3:i6(e,6);break;default:i6(e,2)}}}function i4(e,t){let i=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(i*=2),i*t}function i6(e,t){if(e.j.info("Error code "+t),2==t){var i=null;e.l&&(i=null);var n=ec(e.kb,e);i||(i=new tZ("//www.google.com/images/cleardot.gif"),es.location&&"http"==es.location.protocol||t0(i,"https"),t4(i)),function(e,t){let i=new tg;if(es.Image){let n=new Image;n.onload=ed(ib,i,n,"TestLoadImage: loaded",!0,t),n.onerror=ed(ib,i,n,"TestLoadImage: error",!1,t),n.onabort=ed(ib,i,n,"TestLoadImage: abort",!1,t),n.ontimeout=ed(ib,i,n,"TestLoadImage: timeout",!1,t),es.setTimeout(function(){n.ontimeout&&n.ontimeout()},1e4),n.src=e}else t(!1)}(i.toString(),n)}else tE(2);e.G=0,e.l&&e.l.va(t),i5(e),iG(e)}function i5(e){if(e.G=0,e.la=[],e.l){let t=i_(e.h);(0!=t.length||0!=e.i.length)&&(ev(e.la,t),ev(e.la,e.i),e.h.i.length=0,em(e.i),e.i.length=0),e.l.ua()}}function i9(e,t,i){var n=i instanceof tZ?tQ(i):new tZ(i,void 0);if(""!=n.g)t&&(n.g=t+"."+n.g),t1(n,n.m);else{var r=es.location;n=r.protocol,t=t?t+"."+r.hostname:r.hostname,r=+r.port;var s=new tZ(null,void 0);n&&t0(s,n),t&&(s.g=t),r&&t1(s,r),i&&(s.l=i),n=s}return i=e.D,t=e.za,i&&t&&t3(n,i,t),t3(n,"VER",e.ma),iX(e,n),n}function i8(e,t,i){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return(t=new iO(i&&e.Da&&!e.ra?new iE({jb:!0}):e.ra)).Ka(e.H),t}function i7(){}function ne(){if(eS&&!(10<=Number(eF)))throw Error("Environmental error: no available transport.")}function nt(e,t){e9.call(this),this.g=new iW(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!ew(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!ew(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&t in(e=this.h)&&delete e[t]),this.j=new nr(this)}function ni(e){tP.call(this);var t=e.__sm__;if(t){e:{for(let i in t){e=i;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function nn(){tL.call(this),this.status=1}function nr(e){this.g=e}(et=iO.prototype).Ka=function(e){this.L=e},et.da=function(e,t,i,n){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():a.g(),this.C=this.u?tC(this.u):tC(a),this.g.onreadystatechange=ec(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(e){iD(this,e);return}if(e=i||"",i=new Map(this.headers),n){if(Object.getPrototypeOf(n)===Object.prototype)for(var s in n)i.set(s,n[s]);else if("function"==typeof n.keys&&"function"==typeof n.get)for(let e of n.keys())i.set(e,n.get(e));else throw Error("Unknown input type for opt_headers: "+String(n))}for(let[r,o]of(n=Array.from(i.keys()).find(e=>"content-type"==e.toLowerCase()),s=es.FormData&&e instanceof es.FormData,!(0<=eg(iL,t))||n||s||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i))this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{var o,l;iF(this),0<this.B&&((this.K=(o=this.g,eS&&(l=ex,Object.prototype.hasOwnProperty.call(l,9)?l[9]:l[9]=function(){let e=0,t=eI(String(r)).split("."),i=eI("9").split("."),n=Math.max(t.length,i.length);for(let r=0;0==e&&r<n;r++){var s=t[r]||"",o=i[r]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],0==s[0].length&&0==o[0].length)break;e=eb(0==s[1].length?0:parseInt(s[1],10),0==o[1].length?0:parseInt(o[1],10))||eb(0==s[2].length,0==o[2].length)||eb(s[2],o[2]),s=s[3],o=o[3]}while(0==e)}return 0<=e}(9))&&"number"==typeof o.timeout&&void 0!==o.ontimeout))?(this.g.timeout=this.B,this.g.ontimeout=ec(this.qa,this)):this.A=tu(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){iD(this,e)}},et.qa=function(){void 0!==er&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,e8(this,"timeout"),this.abort(8))},et.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,e8(this,"complete"),e8(this,"abort"),ix(this))},et.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ix(this,!0)),iO.X.M.call(this)},et.Ha=function(){this.s||(this.F||this.v||this.l?iU(this):this.fb())},et.fb=function(){iU(this)},et.aa=function(){try{return 2<ij(this)?this.g.status:-1}catch(e){return -1}},et.fa=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},et.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),iC(t)}},et.Ea=function(){return this.m},et.Oa=function(){return"string"==typeof this.j?this.j:String(this.j)},(et=iW.prototype).ma=8,et.G=1,et.Ja=function(e){if(this.m){if(this.m=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;let r=new tM(this,this.j,e,void 0),s=this.s;if(this.S&&(s?eK(s=eq(s),this.S):s=this.S),null!==this.o||this.N||(r.H=s,s=null),this.O)e:{for(var t=0,i=0;i<this.i.length;i++){t:{var n=this.i[i];if("__data__"in n.g&&"string"==typeof(n=n.g.__data__)){n=n.length;break t}n=void 0}if(void 0===n)break;if(4096<(t+=n)){t=i;break e}if(4096===t||i===this.i.length-1){t=i+1;break e}}t=1e3}else t=1e3;t=iY(this,r,t),t3(i=tQ(this.F),"RID",e),t3(i,"CVER",22),this.D&&t3(i,"X-HTTP-Session-Id",this.D),iX(this,i),s&&(this.N?t="headers="+encodeURIComponent(String(iz(s)))+"&"+t:this.o&&iB(i,this.o,s)),iv(this.h,r),this.Ya&&t3(i,"TYPE","init"),this.O?(t3(i,"$req",t),t3(i,"SID","null"),r.Z=!0,tV(r,i,null)):tV(r,i,t),this.G=2}}else 3==this.G&&(e?iJ(this,e):0==this.i.length||ip(this.h)||iJ(this))}},et.Ia=function(){if(this.u=null,i1(this),this.$&&!(this.K||null==this.g||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=tk(ec(this.eb,this),e)}},et.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,tE(10),iq(this),i1(this))},et.cb=function(){null!=this.v&&(this.v=null,iq(this),iQ(this),tE(19))},et.kb=function(e){e?(this.j.info("Successfully pinged google.com"),tE(2)):(this.j.info("Failed to ping google.com"),tE(1))},(et=i7.prototype).xa=function(){},et.wa=function(){},et.va=function(){},et.ua=function(){},et.Ra=function(){},ne.prototype.g=function(e,t){return new nt(e,t)},ef(nt,e9),nt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,i=this.h||void 0;tE(0),e.V=t,e.ia=i||{},e.L=e.Y,e.F=i9(e,null,e.V),iK(e)},nt.prototype.close=function(){i$(this.g)},nt.prototype.u=function(e){var t=this.g;if("string"==typeof e){var i={};i.__data__=e,e=i}else this.v&&((i={}).__data__=te(e),e=i);t.i.push(new ih(t.ab++,e)),3==t.G&&iK(t)},nt.prototype.M=function(){this.g.l=null,delete this.j,i$(this.g),delete this.g,nt.X.M.call(this)},ef(ni,tP),ef(nn,tL),ef(nr,i7),nr.prototype.xa=function(){e8(this.g,"a")},nr.prototype.wa=function(e){e8(this.g,new ni(e))},nr.prototype.va=function(e){e8(this.g,new nn)},nr.prototype.ua=function(){e8(this.g,"b")},ne.prototype.createWebChannel=ne.prototype.g,nt.prototype.send=nt.prototype.u,nt.prototype.open=nt.prototype.m,nt.prototype.close=nt.prototype.close,tA.NO_ERROR=0,tA.TIMEOUT=8,tA.HTTP_ERROR=6,tS.COMPLETE="complete",tO.EventType=tN,tN.OPEN="a",tN.CLOSE="b",tN.ERROR="c",tN.MESSAGE="d",e9.prototype.listen=e9.prototype.N,iO.prototype.listenOnce=iO.prototype.O,iO.prototype.getLastError=iO.prototype.Oa,iO.prototype.getLastErrorCode=iO.prototype.Ea,iO.prototype.getStatus=iO.prototype.aa,iO.prototype.getResponseJson=iO.prototype.Sa,iO.prototype.getResponseText=iO.prototype.fa,iO.prototype.send=iO.prototype.da,iO.prototype.setWithCredentials=iO.prototype.Ka,en.createWebChannelTransport=function(){return new ne},en.getStatEventTarget=function(){return t_()},en.ErrorCode=tA,en.EventType=tS,en.Event=tv,en.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},en.FetchXmlHttpFactory=iE,en.WebChannel=tO,en.XhrIo=iO,i(3454);let ns="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}no.UNAUTHENTICATED=new no(null),no.GOOGLE_CREDENTIALS=new no("google-credentials-uid"),no.FIRST_PARTY=new no("first-party-uid"),no.MOCK_USER=new no("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let na="9.17.1",nl=new f.Yd("@firebase/firestore");function nu(e,...t){if(nl.logLevel<=f.in.DEBUG){let i=t.map(nc);nl.debug(`Firestore (${na}): ${e}`,...i)}}function nh(e,...t){if(nl.logLevel<=f.in.ERROR){let i=t.map(nc);nl.error(`Firestore (${na}): ${e}`,...i)}}function nc(e){if("string"==typeof e)return e;try{return JSON.stringify(e)}catch(t){return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nd(e="Unexpected state"){let t=`FIRESTORE (${na}) INTERNAL ASSERTION FAILED: `+e;throw nh(t),Error(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nf={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class np extends h.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class nv{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(no.UNAUTHENTICATED))}shutdown(){}}class ny{constructor(e){this.t=e,this.currentUser=no.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let i=this.i,n=e=>this.i!==i?(i=this.i,t(e)):Promise.resolve(),r=new ng;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new ng,e.enqueueRetryable(()=>n(this.currentUser))};let s=()=>{let t=r;e.enqueueRetryable(async()=>{await t.promise,await n(this.currentUser)})},o=e=>{nu("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(e=>o(e)),setTimeout(()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?o(e):(nu("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new ng)}},0),s()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(nu("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?("string"==typeof t.accessToken||nd(),new nm(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){let e=this.auth&&this.auth.getUid();return null===e||"string"==typeof e||nd(),new no(e)}}class n_{constructor(e,t,i,n){this.h=e,this.l=t,this.m=i,this.g=n,this.type="FirstParty",this.user=no.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():("object"==typeof this.h&&null!==this.h&&this.h.auth&&this.h.auth.getAuthHeaderValueForFirstParty||nd(),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);let e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class nw{constructor(e,t,i,n){this.h=e,this.l=t,this.m=i,this.g=n}getToken(){return Promise.resolve(new n_(this.h,this.l,this.m,this.g))}start(e,t){e.enqueueRetryable(()=>t(no.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class nI{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class nb{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,t){let i=e=>{null!=e.error&&nu("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);let i=e.token!==this.A;return this.A=e.token,nu("FirebaseAppCheckTokenProvider",`Received ${i?"new":"existing"} token.`),i?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>i(t))};let n=e=>{nu("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.T.onInit(e=>n(e)),setTimeout(()=>{if(!this.appCheck){let e=this.T.getImmediate({optional:!0});e?n(e):nu("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?("string"==typeof e.token||nd(),this.A=e.token,new nI(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{static R(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,i="";for(;i.length<20;){let n=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){let t="undefined"!=typeof self&&(self.crypto||self.msCrypto),i=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(i);else for(let t=0;t<e;t++)i[t]=Math.floor(256*Math.random());return i}(40);for(let r=0;r<n.length;++r)i.length<20&&n[r]<t&&(i+=e.charAt(n[r]%e.length))}return i}}function nT(e,t){return e<t?-1:e>t?1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nk{constructor(e,t,i){void 0===t?t=0:t>e.length&&nd(),void 0===i?i=e.length-t:i>e.length-t&&nd(),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return 0===nk.comparator(this,e)}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof nk?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let i=Math.min(e.length,t.length);for(let n=0;n<i;n++){let i=e.get(n),r=t.get(n);if(i<r)return -1;if(i>r)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class nA extends nk{construct(e,t,i){return new nA(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){let t=[];for(let i of e){if(i.indexOf("//")>=0)throw new np(nf.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter(e=>e.length>0))}return new nA(t)}static emptyPath(){return new nA([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nS{constructor(e){this.path=e}static fromPath(e){return new nS(nA.fromString(e))}static fromName(e){return new nS(nA.fromString(e).popFirst(5))}static empty(){return new nS(nA.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===nA.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return nA.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new nS(new nA(e.slice()))}}function nR(e){return"IndexedDbTransactionError"===e.name}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nC{constructor(e,t,i,n,r,s,o,a){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=n,this.ssl=r,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class nO{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new nO("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof nO&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nN{constructor(e){this.binaryString=e}static fromBase64String(e){let t=atob(e);return new nN(t)}static fromUint8Array(e){let t=function(e){let t="";for(let i=0;i<e.length;++i)t+=String.fromCharCode(e[i]);return t}(e);return new nN(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let i=0;i<e.length;i++)t[i]=e.charCodeAt(i);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return nT(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}function nP(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}nN.EMPTY_BYTE_STRING=new nN("");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nL{constructor(e,t){this.comparator=e,this.root=t||nM.EMPTY}insert(e,t){return new nL(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,nM.BLACK,null,null))}remove(e){return new nL(this.comparator,this.root.remove(e,this.comparator).copy(null,null,nM.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let i=this.comparator(e,t.key);if(0===i)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){let n=this.comparator(e,i.key);if(0===n)return t+i.left.size;n<0?i=i.left:(t+=i.left.size+1,i=i.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,i)=>(e(t,i),!1))}toString(){let e=[];return this.inorderTraversal((t,i)=>(e.push(`${t}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new nD(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new nD(this.root,e,this.comparator,!1)}getReverseIterator(){return new nD(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new nD(this.root,e,this.comparator,!0)}}class nD{constructor(e,t,i,n){this.isReverse=n,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?i(e.key,t):1,t&&n&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(0===r){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class nM{constructor(e,t,i,n,r){this.key=e,this.value=t,this.color=null!=i?i:nM.RED,this.left=null!=n?n:nM.EMPTY,this.right=null!=r?r:nM.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,n,r){return new nM(null!=e?e:this.key,null!=t?t:this.value,null!=i?i:this.color,null!=n?n:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let n=this,r=i(e,n.key);return(n=r<0?n.copy(null,null,null,n.left.insert(e,t,i),null):0===r?n.copy(null,t,null,null,null):n.copy(null,null,null,null,n.right.insert(e,t,i))).fixUp()}removeMin(){if(this.left.isEmpty())return nM.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}remove(e,t){let i,n=this;if(0>t(e,n.key))n.left.isEmpty()||n.left.isRed()||n.left.left.isRed()||(n=n.moveRedLeft()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed()&&(n=n.rotateRight()),n.right.isEmpty()||n.right.isRed()||n.right.left.isRed()||(n=n.moveRedRight()),0===t(e,n.key)){if(n.right.isEmpty())return nM.EMPTY;i=n.right.min(),n=n.copy(i.key,i.value,null,null,n.right.removeMin())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){let e=this.copy(null,null,nM.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,nM.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){let e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw nd();let e=this.left.check();if(e!==this.right.check())throw nd();return e+(this.isRed()?0:1)}}nM.EMPTY=null,nM.RED=!0,nM.BLACK=!1,nM.EMPTY=new class{constructor(){this.size=0}get key(){throw nd()}get value(){throw nd()}get color(){throw nd()}get left(){throw nd()}get right(){throw nd()}copy(e,t,i,n,r){return this}insert(e,t,i){return new nM(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nU{constructor(e){this.comparator=e,this.data=new nL(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,i)=>(e(t),!1))}forEachInRange(e,t){let i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){let n=i.getNext();if(this.comparator(n.key,e[1])>=0)return;t(n.key)}}forEachWhile(e,t){let i;for(i=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new nx(this.data.getIterator())}getIteratorFrom(e){return new nx(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof nU)||this.size!==e.size)return!1;let t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){let e=t.getNext().key,n=i.getNext().key;if(0!==this.comparator(e,n))return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new nU(this.comparator);return t.data=e,t}}class nx{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}(u=l||(l={}))[u.OK=0]="OK",u[u.CANCELLED=1]="CANCELLED",u[u.UNKNOWN=2]="UNKNOWN",u[u.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",u[u.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",u[u.NOT_FOUND=5]="NOT_FOUND",u[u.ALREADY_EXISTS=6]="ALREADY_EXISTS",u[u.PERMISSION_DENIED=7]="PERMISSION_DENIED",u[u.UNAUTHENTICATED=16]="UNAUTHENTICATED",u[u.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",u[u.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",u[u.ABORTED=10]="ABORTED",u[u.OUT_OF_RANGE=11]="OUT_OF_RANGE",u[u.UNIMPLEMENTED=12]="UNIMPLEMENTED",u[u.INTERNAL=13]="INTERNAL",u[u.UNAVAILABLE=14]="UNAVAILABLE",u[u.DATA_LOSS=15]="DATA_LOSS",new nL(nS.comparator),new nL(nS.comparator),new nL(nS.comparator),new nU(nS.comparator),new nU(nT);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nF{constructor(){}ue(e,t){this.ce(e,t),t.ae()}ce(e,t){var i;if("nullValue"in e)this.he(t,5);else if("booleanValue"in e)this.he(t,10),t.le(e.booleanValue?1:0);else if("integerValue"in e)this.he(t,15),t.le(nP(e.integerValue));else if("doubleValue"in e){let i=nP(e.doubleValue);isNaN(i)?this.he(t,13):(this.he(t,15),0===i&&1/i==-1/0?t.le(0):t.le(i))}else if("timestampValue"in e){let i=e.timestampValue;this.he(t,20),"string"==typeof i?t.fe(i):(t.fe(`${i.seconds||""}`),t.le(i.nanos||0))}else if("stringValue"in e)this.de(e.stringValue,t),this._e(t);else if("bytesValue"in e)this.he(t,30),t.we("string"==typeof(i=e.bytesValue)?nN.fromBase64String(i):nN.fromUint8Array(i)),this._e(t);else if("referenceValue"in e)this.me(e.referenceValue,t);else if("geoPointValue"in e){let i=e.geoPointValue;this.he(t,45),t.le(i.latitude||0),t.le(i.longitude||0)}else"mapValue"in e?"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue?this.he(t,Number.MAX_SAFE_INTEGER):(this.ge(e.mapValue,t),this._e(t)):"arrayValue"in e?(this.ye(e.arrayValue,t),this._e(t)):nd()}de(e,t){this.he(t,25),this.pe(e,t)}pe(e,t){t.fe(e)}ge(e,t){let i=e.fields||{};for(let e of(this.he(t,55),Object.keys(i)))this.de(e,t),this.ce(i[e],t)}ye(e,t){let i=e.values||[];for(let e of(this.he(t,50),i))this.ce(e,t)}me(e,t){this.he(t,37),nS.fromName(e).path.forEach(e=>{this.he(t,60),this.pe(e,t)})}he(e,t){e.le(t)}_e(e){e.le(2)}}nF.Ie=new nF,new Uint8Array(0);class nj{constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}static withCacheSize(e){return new nj(e,nj.DEFAULT_COLLECTION_PERCENTILE,nj.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}function nV(){return"undefined"!=typeof document?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */nj.DEFAULT_COLLECTION_PERCENTILE=10,nj.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,nj.DEFAULT=new nj(41943040,nj.DEFAULT_COLLECTION_PERCENTILE,nj.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),nj.DISABLED=new nj(-1,0,0);class nz{constructor(e,t,i=1e3,n=1.5,r=6e4){this.Hs=e,this.timerId=t,this.mo=i,this.yo=n,this.po=r,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();let t=Math.floor(this.Io+this.bo()),i=Math.max(0,Date.now()-this.Eo),n=Math.max(0,t-i);n>0&&nu("ExponentialBackoff",`Backing off for ${n} ms (base delay: ${this.Io} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,n,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){null!==this.To&&(this.To.skipDelay(),this.To=null)}cancel(){null!==this.To&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nB{constructor(e,t,i,n,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=n,this.removalCallback=r,this.deferred=new ng,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}static createAndSchedule(e,t,i,n,r){let s=Date.now()+i,o=new nB(e,t,s,n,r);return o.start(i),o}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new np(nf.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nH=new Map;class nW{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new np(nf.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new np(nf.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(e,t,i,n){if(!0===t&&!0===n)throw new np(nf.INVALID_ARGUMENT,`${e} and ${i} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n${constructor(e,t,i,n){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new nW({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new np(nf.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new np(nf.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new nW(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new nv;switch(e.type){case"gapi":let t=e.client;return new nw(t,e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new np(nf.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){let t=nH.get(e);t&&(nu("ComponentProvider","Removing Datastore"),nH.delete(e),t.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nq{constructor(e,t,i,n){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=n,this.user=no.UNAUTHENTICATED,this.clientId=nE.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async e=>{nu("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(i,e=>(nu("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new np(nf.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();let e=new ng;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(i){let t=function(e,t){if(nh("AsyncQueue",`${t}: ${e}`),nR(e))return new np(nf.UNAVAILABLE,`${t}: ${e}`);throw e}(i,"Failed to shutdown persistence");e.reject(t)}}),e.promise}}class nG{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new nz(this,"async_queue_retry"),this.Wc=()=>{let e=nV();e&&nu("AsyncQueue","Visibility state changed to "+e.visibilityState),this.xo.Po()};let e=nV();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;let t=nV();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise(()=>{});let t=new ng;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(0!==this.Lc.length){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!nR(e))throw e;nu("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){let t=this.Bc.then(()=>(this.Gc=!0,e().catch(e=>{let t;this.Kc=e,this.Gc=!1;let i=(t=e.message||"",e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t);throw nh("INTERNAL UNHANDLED ERROR: ",i),e}).then(e=>(this.Gc=!1,e))));return this.Bc=t,t}enqueueAfterDelay(e,t,i){this.zc(),this.jc.indexOf(e)>-1&&(t=0);let n=nB.createAndSchedule(this,e,t,i,e=>this.Yc(e));return this.Uc.push(n),n}zc(){this.Kc&&nd()}verifyOperationInProgress(){}async Xc(){let e;do await (e=this.Bc);while(e!==this.Bc)}Zc(e){for(let t of this.Uc)if(t.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{for(let t of(this.Uc.sort((e,t)=>e.targetTimeMs-t.targetTimeMs),this.Uc))if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){let t=this.Uc.indexOf(e);this.Uc.splice(t,1)}}class nK extends n${constructor(e,t,i,n){super(e,t,i,n),this.type="firestore",this._queue=new nG,this._persistenceKey=(null==n?void 0:n.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||function(e){var t,i,n,r;let s=e._freezeSettings(),o=(i=e._databaseId,n=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",r=e._persistenceKey,new nC(i,n,r,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,s.useFetchStreams));e._firestoreClient=new nq(e._authCredentials,e._appCheckCredentials,e._queue,o)}(this),this._firestoreClient.terminate()}}!function(e,t=!0){na=d.SDK_VERSION,(0,d._registerComponent)(new c.wA("firestore",(e,{instanceIdentifier:i,options:n})=>{let r=e.getProvider("app").getImmediate(),s=new nK(new ny(e.getProvider("auth-internal")),new nb(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new np(nf.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new nO(e.options.projectId,t)}(r,i),r);return n=Object.assign({useFetchStreams:t},n),s._setSettings(n),s},"PUBLIC").setMultipleInstances(!0)),(0,d.registerVersion)(ns,"3.8.3",void 0),(0,d.registerVersion)(ns,"3.8.3","esm2017")}();let nJ=m.initializeApp({apiKey:"AIzaSyCFUBWxesLk-BX8KwwQfaI8Gs3cUCcBVWA",authDomain:"pet-story-f51e3.firebaseapp.com",projectId:"pet-story-f51e3",storageBucket:"pet-story-f51e3.appspot.com",messagingSenderId:"576128138584",appId:"1:576128138584:web:c52f7384461830b1eeb92d"});var nX=nJ},227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,i,n){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(2648).Z,r=i(7273).Z,s=n(i(7294)),o=i(1003),a=i(7795),l=i(4465),u=i(2692),h=i(8245),c=i(9246),d=i(227),f=i(3468);let p=new Set;function g(e,t,i,n){if(o.isLocalURL(t)){if(!n.bypassPrefetchedCheck){let r=void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0,s=t+"%"+i+"%"+r;if(p.has(s))return;p.add(s)}Promise.resolve(e.prefetch(t,i,n)).catch(e=>{})}}function m(e){return"string"==typeof e?e:a.formatUrl(e)}let v=s.default.forwardRef(function(e,t){let i,n;let{href:a,as:p,children:v,prefetch:y,passHref:_,replace:w,shallow:I,scroll:b,locale:E,onClick:T,onMouseEnter:k,onTouchStart:A,legacyBehavior:S=!1}=e,R=r(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);i=v,S&&("string"==typeof i||"number"==typeof i)&&(i=s.default.createElement("a",null,i));let C=!1!==y,O=s.default.useContext(u.RouterContext),N=s.default.useContext(h.AppRouterContext),P=null!=O?O:N,L=!O,{href:D,as:M}=s.default.useMemo(()=>{if(!O){let e=m(a);return{href:e,as:p?m(p):e}}let[e,t]=o.resolveHref(O,a,!0);return{href:e,as:p?o.resolveHref(O,p):t||e}},[O,a,p]),U=s.default.useRef(D),x=s.default.useRef(M);S&&(n=s.default.Children.only(i));let F=S?n&&"object"==typeof n&&n.ref:t,[j,V,z]=c.useIntersection({rootMargin:"200px"}),B=s.default.useCallback(e=>{(x.current!==M||U.current!==D)&&(z(),x.current=M,U.current=D),j(e),F&&("function"==typeof F?F(e):"object"==typeof F&&(F.current=e))},[M,F,D,z,j]);s.default.useEffect(()=>{P&&V&&C&&g(P,D,M,{locale:E})},[M,D,V,E,C,null==O?void 0:O.locale,P]);let H={ref:B,onClick(e){S||"function"!=typeof T||T(e),S&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),P&&!e.defaultPrevented&&function(e,t,i,n,r,a,l,u,h,c){let{nodeName:d}=e.currentTarget,f="A"===d.toUpperCase();if(f&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!o.isLocalURL(i)))return;e.preventDefault();let p=()=>{"beforePopState"in t?t[r?"replace":"push"](i,n,{shallow:a,locale:u,scroll:l}):t[r?"replace":"push"](n||i,{forceOptimisticNavigation:!c})};h?s.default.startTransition(p):p()}(e,P,D,M,w,I,b,E,L,C)},onMouseEnter(e){S||"function"!=typeof k||k(e),S&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),P&&(C||!L)&&g(P,D,M,{locale:E,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart(e){S||"function"!=typeof A||A(e),S&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),P&&(C||!L)&&g(P,D,M,{locale:E,priority:!0,bypassPrefetchedCheck:!0})}};if(!S||_||"a"===n.type&&!("href"in n.props)){let e=void 0!==E?E:null==O?void 0:O.locale,t=(null==O?void 0:O.isLocaleDomain)&&d.getDomainLocale(M,e,null==O?void 0:O.locales,null==O?void 0:O.domainLocales);H.href=t||f.addBasePath(l.addLocale(M,e,null==O?void 0:O.defaultLocale))}return S?s.default.cloneElement(n,H):s.default.createElement("a",Object.assign({},R,H),i)});t.default=v,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:i,disabled:l}=e,u=l||!s,[h,c]=n.useState(!1),d=n.useRef(null),f=n.useCallback(e=>{d.current=e},[]);n.useEffect(()=>{if(s){if(u||h)return;let e=d.current;if(e&&e.tagName){let n=function(e,t,i){let{id:n,observer:r,elements:s}=function(e){let t;let i={root:e.root||null,margin:e.rootMargin||""},n=a.find(e=>e.root===i.root&&e.margin===i.margin);if(n&&(t=o.get(n)))return t;let r=new Map,s=new IntersectionObserver(e=>{e.forEach(e=>{let t=r.get(e.target),i=e.isIntersecting||e.intersectionRatio>0;t&&i&&t(i)})},e);return t={id:i,observer:s,elements:r},a.push(i),o.set(i,t),t}(i);return s.set(e,t),r.observe(e),function(){if(s.delete(e),r.unobserve(e),0===s.size){r.disconnect(),o.delete(n);let e=a.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&a.splice(e,1)}}}(e,e=>e&&c(e),{root:null==t?void 0:t.current,rootMargin:i});return n}}else if(!h){let e=r.requestIdleCallback(()=>c(!0));return()=>r.cancelIdleCallback(e)}},[u,i,t,h,d.current]);let p=n.useCallback(()=>{c(!1)},[]);return[f,h,p]};var n=i(7294),r=i(4686);let s="function"==typeof IntersectionObserver,o=new Map,a=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1049:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return f}});var n=i(5893);i(4744);var r=i(1664),s=i.n(r);let o=e=>{let{children:t}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("header",{className:"flex flex-wrap container mx-auto max-w-full items-center p-6 justify-between bg-white shadow-md sticky top-0 z-50",children:[(0,n.jsx)("div",{className:"flex items-center text-blue-900 hover:text-blue-800 cursor-pointer transition duration-150 ",children:(0,n.jsx)(s(),{href:{pathname:"/",query:{name:"Home"}},children:(0,n.jsx)("span",{className:"font-semibold text-lg font-sans",children:"Firebase Authentication with Next.js"})})}),(0,n.jsx)("nav",{className:"md:flex md:items-center font-title w-full md:w-auto",children:(0,n.jsx)("ul",{className:"text-lg inline-block",children:(0,n.jsx)(n.Fragment,{children:[{id:1,name:"Home",link:"/"},{id:2,name:"Login",link:"/login"},{id:3,name:"Sign Up",link:"/signup"}].map(e=>(0,n.jsx)("li",{className:"my-3 md:my-0 items-center mr-4 md:inline-block block ",children:(0,n.jsx)(s(),{href:null==e?void 0:e.link,children:null==e?void 0:e.name})},e.id))})})})]}),t]})};var a=i(7294),l=i(1259),u=i(6532);let h=(0,l.v0)(u.Z),c=(0,a.createContext)({}),d=e=>{let{children:t}=e,[i,r]=(0,a.useState)({email:null,uid:null}),[s,o]=(0,a.useState)(!0);return(0,a.useEffect)(()=>{let e=(0,l.Aj)(h,e=>{e?r({email:e.email,uid:e.uid}):r({email:null,uid:null})});return o(!1),()=>e()},[]),(0,n.jsx)(c.Provider,{value:{user:i},children:s?null:t})};var f=function(e){let{Component:t,pageProps:i}=e;return(0,n.jsx)(d,{children:(0,n.jsx)(o,{children:(0,n.jsx)(t,{...i})})})}},4744:function(){},7663:function(e){!function(){var t={229:function(e){var t,i,n,r=e.exports={};function s(){throw Error("setTimeout has not been defined")}function o(){throw Error("clearTimeout has not been defined")}function a(e){if(t===setTimeout)return setTimeout(e,0);if((t===s||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(i){try{return t.call(null,e,0)}catch(i){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:s}catch(e){t=s}try{i="function"==typeof clearTimeout?clearTimeout:o}catch(e){i=o}}();var l=[],u=!1,h=-1;function c(){u&&n&&(u=!1,n.length?l=n.concat(l):h=-1,l.length&&d())}function d(){if(!u){var e=a(c);u=!0;for(var t=l.length;t;){for(n=l,l=[];++h<t;)n&&n[h].run();h=-1,t=l.length}n=null,u=!1,function(e){if(i===clearTimeout)return clearTimeout(e);if((i===o||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(e);try{i(e)}catch(t){try{return i.call(null,e)}catch(t){return i.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function p(){}r.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var i=1;i<arguments.length;i++)t[i-1]=arguments[i];l.push(new f(e,t)),1!==l.length||u||a(d)},f.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=p,r.addListener=p,r.once=p,r.off=p,r.removeListener=p,r.removeAllListeners=p,r.emit=p,r.prependListener=p,r.prependOnceListener=p,r.listeners=function(e){return[]},r.binding=function(e){throw Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw Error("process.chdir is not supported")},r.umask=function(){return 0}}},i={};function n(e){var r=i[e];if(void 0!==r)return r.exports;var s=i[e]={exports:{}},o=!0;try{t[e](s,s.exports,n),o=!1}finally{o&&delete i[e]}return s.exports}n.ab="//";var r=n(229);e.exports=r}()},1664:function(e,t,i){e.exports=i(1551)},5816:function(e,t,i){"use strict";let n,r;i.r(t),i.d(t,{FirebaseError:function(){return l.ZR},SDK_VERSION:function(){return F},_DEFAULT_ENTRY_NAME:function(){return A},_addComponent:function(){return O},_addOrOverwriteComponent:function(){return N},_apps:function(){return R},_clearComponents:function(){return M},_components:function(){return C},_getProvider:function(){return L},_registerComponent:function(){return P},_removeServiceInstance:function(){return D},deleteApp:function(){return B},getApp:function(){return V},getApps:function(){return z},initializeApp:function(){return j},onLog:function(){return W},registerVersion:function(){return H},setLogLevel:function(){return $}});var s,o=i(8463),a=i(3333),l=i(4444);let u=(e,t)=>t.some(t=>e instanceof t),h=new WeakMap,c=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,g={get(e,t,i){if(e instanceof IDBTransaction){if("done"===t)return c.get(e);if("objectStoreNames"===t)return e.objectStoreNames||d.get(e);if("store"===t)return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return m(e[t])},set:(e,t,i)=>(e[t]=i,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function m(e){var t;if(e instanceof IDBRequest)return function(e){let t=new Promise((t,i)=>{let n=()=>{e.removeEventListener("success",r),e.removeEventListener("error",s)},r=()=>{t(m(e.result)),n()},s=()=>{i(e.error),n()};e.addEventListener("success",r),e.addEventListener("error",s)});return t.then(t=>{t instanceof IDBCursor&&h.set(t,e)}).catch(()=>{}),p.set(t,e),t}(e);if(f.has(e))return f.get(e);let i="function"==typeof(t=e)?t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(r||(r=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(v(this),e),m(h.get(this))}:function(...e){return m(t.apply(v(this),e))}:function(e,...i){let n=t.call(v(this),e,...i);return d.set(n,e.sort?e.sort():[e]),m(n)}:(t instanceof IDBTransaction&&function(e){if(c.has(e))return;let t=new Promise((t,i)=>{let n=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",s),e.removeEventListener("abort",s)},r=()=>{t(),n()},s=()=>{i(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",r),e.addEventListener("error",s),e.addEventListener("abort",s)});c.set(e,t)}(t),u(t,n||(n=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(t,g):t;return i!==e&&(f.set(e,i),p.set(i,e)),i}let v=e=>p.get(e),y=["get","getKey","getAll","getAllKeys","count"],_=["put","add","delete","clear"],w=new Map;function I(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(w.get(t))return w.get(t);let i=t.replace(/FromIndex$/,""),n=t!==i,r=_.includes(i);if(!(i in(n?IDBIndex:IDBObjectStore).prototype)||!(r||y.includes(i)))return;let s=async function(e,...t){let s=this.transaction(e,r?"readwrite":"readonly"),o=s.store;return n&&(o=o.index(t.shift())),(await Promise.all([o[i](...t),r&&s.done]))[0]};return w.set(t,s),s}g={...s=g,get:(e,t,i)=>I(e,t)||s.get(e,t,i),has:(e,t)=>!!I(e,t)||s.has(e,t)};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e){this.container=e}getPlatformInfoString(){let e=this.container.getProviders();return e.map(e=>{if(!function(e){let t=e.getComponent();return(null==t?void 0:t.type)==="VERSION"}(e))return null;{let t=e.getImmediate();return`${t.library}/${t.version}`}}).filter(e=>e).join(" ")}}let E="@firebase/app",T="0.9.3",k=new a.Yd("@firebase/app"),A="[DEFAULT]",S={[E]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},R=new Map,C=new Map;function O(e,t){try{e.container.addComponent(t)}catch(i){k.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,i)}}function N(e,t){e.container.addOrOverwriteComponent(t)}function P(e){let t=e.name;if(C.has(t))return k.debug(`There were multiple attempts to register component ${t}.`),!1;for(let i of(C.set(t,e),R.values()))O(i,e);return!0}function L(e,t){let i=e.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),e.container.getProvider(t)}function D(e,t,i=A){L(e,t).clearInstance(i)}function M(){C.clear()}let U=new l.LL("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new o.wA("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw U.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let F="9.17.1";function j(e,t={}){let i=e;if("object"!=typeof t){let e=t;t={name:e}}let n=Object.assign({name:A,automaticDataCollectionEnabled:!1},t),r=n.name;if("string"!=typeof r||!r)throw U.create("bad-app-name",{appName:String(r)});if(i||(i=(0,l.aH)()),!i)throw U.create("no-options");let s=R.get(r);if(s){if((0,l.vZ)(i,s.options)&&(0,l.vZ)(n,s.config))return s;throw U.create("duplicate-app",{appName:r})}let a=new o.H0(r);for(let e of C.values())a.addComponent(e);let u=new x(i,n,a);return R.set(r,u),u}function V(e=A){let t=R.get(e);if(!t&&e===A)return j();if(!t)throw U.create("no-app",{appName:e});return t}function z(){return Array.from(R.values())}async function B(e){let t=e.name;R.has(t)&&(R.delete(t),await Promise.all(e.container.getProviders().map(e=>e.delete())),e.isDeleted=!0)}function H(e,t,i){var n;let r=null!==(n=S[e])&&void 0!==n?n:e;i&&(r+=`-${i}`);let s=r.match(/\s|\//),a=t.match(/\s|\//);if(s||a){let e=[`Unable to register library "${r}" with version "${t}":`];s&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),k.warn(e.join(" "));return}P(new o.wA(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}function W(e,t){if(null!==e&&"function"!=typeof e)throw U.create("invalid-log-argument");(0,a.Am)(e,t)}function $(e){(0,a.Ub)(e)}let q="firebase-heartbeat-store",G=null;function K(){return G||(G=(function(e,t,{blocked:i,upgrade:n,blocking:r,terminated:s}={}){let o=indexedDB.open(e,1),a=m(o);return n&&o.addEventListener("upgradeneeded",e=>{n(m(o.result),e.oldVersion,e.newVersion,m(o.transaction))}),i&&o.addEventListener("blocked",()=>i()),a.then(e=>{s&&e.addEventListener("close",()=>s()),r&&e.addEventListener("versionchange",()=>r())}).catch(()=>{}),a})("firebase-heartbeat-database",0,{upgrade:(e,t)=>{0===t&&e.createObjectStore(q)}}).catch(e=>{throw U.create("idb-open",{originalErrorMessage:e.message})})),G}async function J(e){try{let t=await K();return t.transaction(q).objectStore(q).get(Y(e))}catch(e){if(e instanceof l.ZR)k.warn(e.message);else{let t=U.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});k.warn(t.message)}}}async function X(e,t){try{let i=await K(),n=i.transaction(q,"readwrite"),r=n.objectStore(q);return await r.put(t,Y(e)),n.done}catch(e){if(e instanceof l.ZR)k.warn(e.message);else{let t=U.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});k.warn(t.message)}}}function Y(e){return`${e.name}!${e.options.appId}`}class Z{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new ee(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){let e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),i=Q();return(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(e=>e.date===i))?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{let t=new Date(e.date).valueOf(),i=Date.now();return i-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache))}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";let e=Q(),{heartbeatsToSend:t,unsentEntries:i}=function(e,t=1024){let i=[],n=e.slice();for(let r of e){let e=i.find(e=>e.agent===r.agent);if(e){if(e.dates.push(r.date),et(i)>t){e.dates.pop();break}}else if(i.push({agent:r.agent,dates:[r.date]}),et(i)>t){i.pop();break}n=n.slice(1)}return{heartbeatsToSend:i,unsentEntries:n}}(this._heartbeatsCache.heartbeats),n=(0,l.L)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),n}}function Q(){let e=new Date;return e.toISOString().substring(0,10)}class ee{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,l.hl)()&&(0,l.eu)().then(()=>!0).catch(()=>!1)}async read(){let e=await this._canUseIndexedDBPromise;if(!e)return{heartbeats:[]};{let e=await J(this.app);return e||{heartbeats:[]}}}async overwrite(e){var t;let i=await this._canUseIndexedDBPromise;if(i){let i=await this.read();return X(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;let i=await this._canUseIndexedDBPromise;if(i){let i=await this.read();return X(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}}}function et(e){return(0,l.L)(JSON.stringify({version:2,heartbeats:e})).length}P(new o.wA("platform-logger",e=>new b(e),"PRIVATE")),P(new o.wA("heartbeat",e=>new Z(e),"PRIVATE")),H(E,T,""),H(E,T,"esm2017"),H("fire-js","")},8463:function(e,t,i){"use strict";i.d(t,{H0:function(){return a},wA:function(){return r}});var n=i(4444);class r{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let s="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let e=new n.BH;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{let i=this.getOrInitializeService({instanceIdentifier:t});i&&e.resolve(i)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let i=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),n=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(e){if(n)return null;throw e}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if("EAGER"===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:s})}catch(e){}for(let[e,t]of this.instancesDeferred.entries()){let i=this.normalizeInstanceIdentifier(e);try{let e=this.getOrInitializeService({instanceIdentifier:i});t.resolve(e)}catch(e){}}}}clearInstance(e=s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=s){return this.instances.has(e)}getOptions(e=s){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let n=this.getOrInitializeService({instanceIdentifier:i,options:t});for(let[e,t]of this.instancesDeferred.entries()){let r=this.normalizeInstanceIdentifier(e);i===r&&t.resolve(n)}return n}onInit(e,t){var i;let n=this.normalizeInstanceIdentifier(t),r=null!==(i=this.onInitCallbacks.get(n))&&void 0!==i?i:new Set;r.add(e),this.onInitCallbacks.set(n,r);let s=this.instances.get(n);return s&&e(s,n),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){let i=this.onInitCallbacks.get(t);if(i)for(let n of i)try{n(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:e===s?void 0:e,options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch(e){}return i||null}normalizeInstanceIdentifier(e=s){return this.component?this.component.multipleInstances?e:s:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){let t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},3333:function(e,t,i){"use strict";var n,r;i.d(t,{Am:function(){return d},Ub:function(){return c},Yd:function(){return h},in:function(){return n}});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let s=[];(r=n||(n={}))[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT";let o={debug:n.DEBUG,verbose:n.VERBOSE,info:n.INFO,warn:n.WARN,error:n.ERROR,silent:n.SILENT},a=n.INFO,l={[n.DEBUG]:"log",[n.VERBOSE]:"log",[n.INFO]:"info",[n.WARN]:"warn",[n.ERROR]:"error"},u=(e,t,...i)=>{if(t<e.logLevel)return;let n=new Date().toISOString(),r=l[t];if(r)console[r](`[${n}]  ${e.name}:`,...i);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class h{constructor(e){this.name=e,this._logLevel=a,this._logHandler=u,this._userLogHandler=null,s.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in n))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?o[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,n.DEBUG,...e),this._logHandler(this,n.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,n.VERBOSE,...e),this._logHandler(this,n.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,n.INFO,...e),this._logHandler(this,n.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,n.WARN,...e),this._logHandler(this,n.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,n.ERROR,...e),this._logHandler(this,n.ERROR,...e)}}function c(e){s.forEach(t=>{t.setLogLevel(e)})}function d(e,t){for(let i of s){let r=null;t&&t.level&&(r=o[t.level]),null===e?i.userLogHandler=null:i.userLogHandler=(t,i,...s)=>{let o=s.map(e=>{if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(e){return null}}).filter(e=>e).join(" ");i>=(null!=r?r:t.logLevel)&&e({level:n[i].toLowerCase(),message:o,args:s,type:t.name})}}}},1259:function(e,t,i){"use strict";i.d(t,{_O:function(){return n.N},hJ:function(){return n.Q},v0:function(){return n.n},Aj:function(){return n.v}});var n=i(2191);i(4444),i(5816),i(3333),i(8463)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(880)}),_N_E=e.O()}]);