
export class FeatureService {
    features = [
        {
            feature: 'Plan',
            description: 'Collaborate and model different enrollment assumptions on a global basis.'
        },
        {
            feature: 'Track',
            description: 'Monitor the progress of trialsagainst plan and visualize projected performance.'
        },
        {
            feature: 'Diagonose',
            description: 'Drill down into key performance areas to identify performance issues quickly.'
        },
        {
            feature: 'Optimize',
            description: 'Model various course-corrective strategies to get trials back on track.'
        },
        {
            feature: 'Analyze',
            description: 'Evaluate historical performance trends across trials, countries and investigators.'
        },
        {
            feature: 'Budget',
            description: 'Evaluate trial enrollment and treatment costs projected across trial duration.'
        },
        {
            feature: 'Leverage',
            description: 'Install consistent policies and leverages best practices across the organization.'
        },
        {
            feature: 'Oversee',
            description: 'Gain immediate visibility into all  the trials in a portfolio from  a single view.'
        }
    ];

    addFeature(feature: string, description: string) {
        this.features.push({feature: feature, description: description});
    }

    getFeatures() {
        return this.features;
    }

}
