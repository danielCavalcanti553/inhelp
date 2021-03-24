import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PesquisarProfissionaisPage } from './pesquisar-profissionais.page';

describe('PesquisarProfissionaisPage', () => {
  let component: PesquisarProfissionaisPage;
  let fixture: ComponentFixture<PesquisarProfissionaisPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PesquisarProfissionaisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PesquisarProfissionaisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
