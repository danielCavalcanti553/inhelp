import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContratacoesAnterioresPage } from './contratacoes-anteriores.page';

describe('ContratacoesAnterioresPage', () => {
  let component: ContratacoesAnterioresPage;
  let fixture: ComponentFixture<ContratacoesAnterioresPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ContratacoesAnterioresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContratacoesAnterioresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
