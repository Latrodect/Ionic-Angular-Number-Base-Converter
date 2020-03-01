import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PagethreePage } from './pagethree.page';

describe('PagethreePage', () => {
  let component: PagethreePage;
  let fixture: ComponentFixture<PagethreePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagethreePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PagethreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
