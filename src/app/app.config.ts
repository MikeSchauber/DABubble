import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getFunctions, provideFunctions } from '@angular/fire/functions';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideAnimationsAsync(), provideFirebaseApp(() => initializeApp({"projectId":"dabubble382","appId":"1:1025519789933:web:641a80f3ee273246159c64","storageBucket":"dabubble382.firebasestorage.app","apiKey":"AIzaSyB8af0a2TmEVm4i3E02PZ2tXRHMc7Ih69c","authDomain":"dabubble382.firebaseapp.com","messagingSenderId":"1025519789933","measurementId":"G-0SYEDTFX53"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideFunctions(() => getFunctions()), provideMessaging(() => getMessaging()), provideStorage(() => getStorage()), provideFirebaseApp(() => initializeApp({"projectId":"dabubble382","appId":"1:1025519789933:web:641a80f3ee273246159c64","storageBucket":"dabubble382.firebasestorage.app","apiKey":"AIzaSyB8af0a2TmEVm4i3E02PZ2tXRHMc7Ih69c","authDomain":"dabubble382.firebaseapp.com","messagingSenderId":"1025519789933","measurementId":"G-0SYEDTFX53"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideFunctions(() => getFunctions()), provideMessaging(() => getMessaging()), provideStorage(() => getStorage()), provideFirebaseApp(() => initializeApp({"projectId":"dabubble382","appId":"1:1025519789933:web:b1b5c1cbfe96f7ab159c64","storageBucket":"dabubble382.firebasestorage.app","apiKey":"AIzaSyB8af0a2TmEVm4i3E02PZ2tXRHMc7Ih69c","authDomain":"dabubble382.firebaseapp.com","messagingSenderId":"1025519789933","measurementId":"G-H16XRVJ3KT"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideFunctions(() => getFunctions()), provideMessaging(() => getMessaging()), provideStorage(() => getStorage())]
};
