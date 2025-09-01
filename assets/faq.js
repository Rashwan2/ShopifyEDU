class FAQSection extends HTMLElement {
    constructor() {
        super();
<<<<<<< HEAD
=======
        this.questions = this.querySelectorAll('.faq-question');
>>>>>>> 5e16848c17d717aac908e7794039ee9eff8d38c7
        this.init();
    }

    init() {
<<<<<<< HEAD
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setupEventListeners());
        } else {
            this.setupEventListeners();
        }
    }

    setupEventListeners() {
        const questions = this.querySelectorAll('.faq-question');
        console.log('Found FAQ questions:', questions.length); // Debug log

        questions.forEach((question, index) => {
            console.log(`Setting up question ${index + 1}:`, question); // Debug log

            question.addEventListener('click', (event) => this.toggleAnswer(event));
            question.addEventListener('keydown', (event) => this.handleKeydown(event));

            // Add some visual feedback that the event listener is attached
            question.style.cursor = 'pointer';
=======
        this.questions.forEach(question => {
            question.addEventListener('click', this.toggleAnswer.bind(this));
            question.addEventListener('keydown', this.handleKeydown.bind(this));
>>>>>>> 5e16848c17d717aac908e7794039ee9eff8d38c7
        });
    }

    toggleAnswer(event) {
<<<<<<< HEAD
        console.log('Toggle answer called'); // Debug log

=======
>>>>>>> 5e16848c17d717aac908e7794039ee9eff8d38c7
        const question = event.currentTarget;
        const answer = question.nextElementSibling;
        const icon = question.querySelector('.faq-icon');

<<<<<<< HEAD
        console.log('Question:', question);
        console.log('Answer:', answer);
        console.log('Icon:', icon);

        if (!answer || !icon) {
            console.error('Missing answer or icon element');
            return;
        }

        // Close other open answers
        const allQuestions = this.querySelectorAll('.faq-question');
        allQuestions.forEach(otherQuestion => {
=======
        // Close other open answers
        this.questions.forEach(otherQuestion => {
>>>>>>> 5e16848c17d717aac908e7794039ee9eff8d38c7
            if (otherQuestion !== question) {
                const otherAnswer = otherQuestion.nextElementSibling;
                const otherIcon = otherQuestion.querySelector('.faq-icon');

<<<<<<< HEAD
                if (otherAnswer && otherIcon) {
                    otherAnswer.classList.remove('active');
                    otherIcon.textContent = '+';
                    otherQuestion.setAttribute('aria-expanded', 'false');
                }
=======
                otherAnswer.classList.remove('active');
                otherIcon.textContent = '+';
                otherQuestion.setAttribute('aria-expanded', 'false');
>>>>>>> 5e16848c17d717aac908e7794039ee9eff8d38c7
            }
        });

        // Toggle current answer
<<<<<<< HEAD
        const isActive = answer.classList.contains('active');
        answer.classList.toggle('active');
        icon.textContent = isActive ? '+' : '−';
        question.setAttribute('aria-expanded', !isActive);

        console.log('Answer toggled, active:', !isActive);
=======
        answer.classList.toggle('active');
        icon.textContent = answer.classList.contains('active') ? '−' : '+';
        question.setAttribute('aria-expanded', answer.classList.contains('active'));
>>>>>>> 5e16848c17d717aac908e7794039ee9eff8d38c7
    }

    handleKeydown(event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            this.toggleAnswer(event);
        }
    }
}

customElements.define('faq-section', FAQSection);