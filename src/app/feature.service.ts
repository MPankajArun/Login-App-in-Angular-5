
export class FeatureService {
    features = [
        {
            featureName: 'Plan',
            description: 'Collaborate and model different enrollment assumptions on a global basis.'
        },
        {
            featureName: 'Track',
            description: 'Monitor the progress of trialsagainst plan and visualize projected performance.'
        },
        {
            featureName: 'Diagonose',
            description: 'Drill down into key performance areas to identify performance issues quickly.'
        },
        {
            featureName: 'Optimize',
            description: 'Model various course-corrective strategies to get trials back on track.'
        },
        {
            featureName: 'Analyze',
            description: 'Evaluate historical performance trends across trials, countries and investigators.'
        },
        {
            featureName: 'Budget',
            description: 'Evaluate trial enrollment and treatment costs projected across trial duration.'
        },
        {
            featureName: 'Leverage',
            description: 'Install consistent policies and leverages best practices across the organization.'
        },
        {
            featureName: 'Oversee',
            description: 'Gain immediate visibility into all  the trials in a portfolio from  a single view.'
        }
    ];

    addFeature(feature: string, description: string) {
        this.features.push({featureName: feature, description: description});
    }

    getFeatures() {
        return this.features;
    }

}
