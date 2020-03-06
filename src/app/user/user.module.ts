import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { userFeatureKey, userReducer } from './store/user.reducer';
import { UserEffects } from './store/user.effects';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  imports: [
    UserRoutingModule,
    StoreModule.forFeature(userFeatureKey, userReducer),
    EffectsModule.forFeature([UserEffects]),
    
  ],
})
export class UserModule {}