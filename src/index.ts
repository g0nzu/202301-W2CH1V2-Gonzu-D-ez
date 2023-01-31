import { CharacterTypes } from './personaje.js';

export const createContent = (characters: Array<CharacterTypes>) => {
  let contentTemplate = `<div class="app container"><ul class="characters-list row list-unstyled">`;
  characters.forEach((item) => {
    contentTemplate += `<li class="character col" data-name=${item.name}>
                    <div class="card character__card">
                        <img
                            src=${img}
                            alt="${item.name} ${item.family}"
                            class="character__picture card-img-top"
                        />
                        <div class="card-body">
                            <h2 class="character__name card-title h4">
                                ${item.name} ${item.family}
                            </h2>
                            <div class="character__info">
                                <ul class="list-unstyled">
                                    <li>Edad: ${item.age} años</li>
                                    <li>
                                        Estado:<i class="fas fa-thumbs-up"></i>
                                    </li>
                                </ul>
                            </div>
                            <div class="character__overlay">
                                <ul class="list-unstyled">
                                </ul>
                                <div class="character__actions">
                                    <button class="character__action btn" id="btn-communication">
                                        habla
                                    </button>
                                    <button class="character__action btn" id="btn-die">
                                        muere
                                    </button>
                                </div>
                            </div>
                        </div>
                        <i class="emoji">${item}</i>
                    </div>
                </li>`;
  });
};
