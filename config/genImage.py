import os
from azure.cognitiveservices.search.imagesearch import ImageSearchClient
from msrest.authentication import CognitiveServicesCredentials
import os 
from pprint import pprint
import requests
import random
from dotenv import load_dotenv

load_dotenv()

subscription_key = os.environ.get('BING_API_KEY')
subscription_endpoint = "https://api.bing.microsoft.com/v7.0/images/search"
bing = ImageSearchClient(endpoint=subscription_endpoint, credentials=CognitiveServicesCredentials(subscription_key))
mkt = 'en-US'

def bingSearch(search_term):
    params = { 'q': search_term, 'mkt': mkt , 'safeSearch': "Strict"}
    headers = { 'Ocp-Apim-Subscription-Key': subscription_key }
    response = requests.get(subscription_endpoint, headers=headers, params=params)
    response.raise_for_status()
    search_results = response.json()
    content_url = search_results["value"][random.randint(0,len(search_results['value']))]["contentUrl"]
    return content_url