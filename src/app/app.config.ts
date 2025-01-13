import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth, connectAuthEmulator } from '@angular/fire/auth';
import { provideFirestore, getFirestore, connectFirestoreEmulator } from '@angular/fire/firestore';
import { provideFunctions, getFunctions, connectFunctionsEmulator} from '@angular/fire/functions';
import { provideMessaging, getMessaging } from '@angular/fire/messaging';
import { provideStorage, getStorage, connectStorageEmulator } from '@angular/fire/storage';
import { routes } from './app.routes';
import { provideRouter } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"friendlychat-c8e19","appId":"1:632059548740:web:faa77419a70ca207099811","storageBucket":"friendlychat-c8e19.firebasestorage.app","apiKey":"AIzaSyCNgTcJebBeJbEe4YOeG08Wee9r40uQn_g","authDomain":"friendlychat-c8e19.firebaseapp.com","messagingSenderId":"632059548740"})), 
    provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideMessaging(() => getMessaging()), provideStorage(() => getStorage()), 
    provideFirebaseApp(() => initializeApp({"projectId":"friendlychat-c8e19","appId":"1:632059548740:web:faa77419a70ca207099811","storageBucket":"friendlychat-c8e19.firebasestorage.app","apiKey":"AIzaSyCNgTcJebBeJbEe4YOeG08Wee9r40uQn_g","authDomain":"friendlychat-c8e19.firebaseapp.com","messagingSenderId":"632059548740"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideMessaging(() => getMessaging()), provideStorage(() => getStorage()), 
    provideFirebaseApp(() => initializeApp({"projectId":"friendlychat-c8e19","appId":"1:632059548740:web:faa77419a70ca207099811","storageBucket":"friendlychat-c8e19.firebasestorage.app","apiKey":"AIzaSyCNgTcJebBeJbEe4YOeG08Wee9r40uQn_g","authDomain":"friendlychat-c8e19.firebaseapp.com","messagingSenderId":"632059548740"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideMessaging(() => getMessaging()), provideStorage(() => getStorage())
  ],
};
