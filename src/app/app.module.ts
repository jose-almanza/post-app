import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { PostComponent } from './post/components/post.component';
import { StoreModule } from '@ngrx/store';
import { postReducer } from './post/store/post.reducer';
import { PostEffects } from './post/store/post.effects';
import { EffectsModule } from '@ngrx/effects';
import { PostModule } from './post/post.module';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import { PostPageComponent } from './post/containers/post-page/post-page.component';
import { UserComponent } from './user/components/user.component';
import { UserPageComponent } from './user/containers/user-page/user-page.component'
import { userReducer } from './user/store/user.reducer';
import { UserEffects } from './user/store/user.effects';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostPageComponent,
    UserComponent,
    UserPageComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ posts: postReducer, users: userReducer}),
    EffectsModule.forRoot([PostEffects, UserEffects]),
    StoreDevtoolsModule.instrument({}),
    PostModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
